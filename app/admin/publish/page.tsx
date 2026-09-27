import type { Metadata } from "next";
import { cookies } from "next/headers";
import { PdfPublisher } from "@/components/PdfPublisher";
import { ADMIN_COOKIE, adminAuthConfigured, verifyAdminSession } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Publisher",
  robots: { index: false, follow: false },
};

export default async function PublishPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;
  const cookieStore = await cookies();
  const authenticated = verifyAdminSession(cookieStore.get(ADMIN_COOKIE)?.value);

  if (!adminAuthConfigured()) {
    return (
      <section className="archive">
        <div className="shell">
          <div className="publisher-locked">
            <p className="kicker">Seven Gates publisher</p>
            <h1>One-time configuration required.</h1>
            <p className="deck">
              Add <code>PUBLISH_ADMIN_PASSWORD</code> and <code>GITHUB_TOKEN</code>
              to the Vercel project environment, then redeploy. The token needs
              Contents read/write permission for this repository.
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (!authenticated) {
    return (
      <section className="archive">
        <div className="shell">
          <div className="publisher-login">
            <p className="kicker">Seven Gates publisher</p>
            <h1>Publishing desk.</h1>
            <p className="deck">Sign in to publish a finished Seven Gates PDF from mobile.</p>
            {params.error && <div className="publisher-message is-error">Incorrect publishing password.</div>}
            <form action="/api/admin/login" method="post" className="publisher-login-form">
              <input type="hidden" name="returnTo" value="/admin/publish" />
              <label>
                <span>Password</span>
                <input type="password" name="password" required autoComplete="current-password" />
              </label>
              <button type="submit" className="publisher-submit">Sign in</button>
            </form>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="archive publisher-page">
      <div className="shell">
        <div className="publisher-toolbar">
          <span>Authenticated publishing session</span>
          <form action="/api/admin/logout" method="post">
            <button type="submit">Sign out</button>
          </form>
        </div>
        <PdfPublisher />
      </div>
    </section>
  );
}
