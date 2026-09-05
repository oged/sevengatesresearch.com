## MMM: The Recession Gets a Social Network

In August 2016, Nigeria's Securities and Exchange Commission issued a public warning about MMM Federal Republic of Nigeria. The regulator described the platform's own language: a "mutual aid financial network" promising 30 percent monthly.

The choice of words was brilliant.

MMM did not merely sell investment returns. It offered an explanation for why finance itself was corrupt. Banks were greedy. Government was unreliable. Conventional finance was exploitative. Participants were "providing help" and "getting help." Money passed between peers. The scheme became a community and, crucially, a moral argument.

The cleverest Ponzi schemes do not merely explain why you should trust them. **They explain why everyone else is untrustworthy.**

The timing helped. Nigeria entered recession in 2016. The Central Bank recorded a 1.5 percent GDP contraction, continued naira depreciation and headline inflation that rose from 9.62 percent in January to 18.55 percent in December. The World Bank described it as the country's first full-year recession in roughly a quarter century.

It would be foolish to say recession caused MMM. Bad economies do not mechanically produce 30 percent monthly fantasies. Plenty of people in recessions buy no Ponzi at all. But macroeconomic instability can alter the felt value of time.

This is the shortening of financial time.

If prices rise faster than your salary, waiting becomes expensive. If the currency repeatedly weakens, money saved for tomorrow appears to evaporate today. If jobs are uncertain, ten-year plans begin to look like science fiction written by somebody with a pension.

Economic instability does not make 30 percent a month rational. **It can make patience feel irrational.**

This is one reason the simple sermon, "people should learn compound interest," often misses the emotional setting in which the decision is made. The person understands that 30 percent is extraordinary. That is why he is there. What he may not understand is the exact relationship between extraordinary promised return and extraordinary required inflow.

So let us do the arithmetic.

## It Is Still Growing. It Is Already Dead.

Forget MMM's actual cash flows for a moment. The following is an illustrative MMM-style model, not a reconstruction of the platform's books.

Let:

`N_t = new money entering during month t`

and let the promised monthly return be:

`r = 0.30`

If last month's new cohort must receive principal plus 30 percent, the amount due is:

`P_t = (1 + r) N_(t-1)`

Now suppose new money itself grows at rate `g_t`:

`N_t = (1 + g_t) N_(t-1)`

Ignoring other expenses for the moment, the change in cash reserve is:

`ΔC_t = N_t - P_t`

Therefore:

`ΔC_t = (g_t - r) N_(t-1)`

For a 30 percent monthly promise:

`ΔC_t = (g_t - 0.30) N_(t-1)`

This is the part that should be printed on the wall of every investment seminar promising miraculous monthly income.

The Ponzi does not need deposits to fall before it starts dying.

It only needs deposit growth to slow below 30 percent.

Here is a simulation beginning with ₦1 billion of new money:

| Month | New money | Growth | Previous cohort due | Monthly surplus / deficit | Cash reserve |
|---:|---:|---:|---:|---:|---:|
| 0 | ₦1.000bn | - | - | +₦1.000bn | ₦1.000bn |
| 1 | ₦1.600bn | 60% | ₦1.300bn | +₦300m | ₦1.300bn |
| 2 | ₦2.400bn | 50% | ₦2.080bn | +₦320m | ₦1.620bn |
| 3 | ₦3.360bn | 40% | ₦3.120bn | +₦240m | ₦1.860bn |
| 4 | ₦4.536bn | 35% | ₦4.368bn | +₦168m | ₦2.028bn |
| 5 | ₦5.897bn | 30% | ₦5.897bn | ₦0 | ₦2.028bn |
| 6 | ₦7.371bn | 25% | ₦7.666bn | -₦295m | ₦1.733bn |
| 7 | ₦8.845bn | 20% | ₦9.582bn | -₦737m | ₦996m |
| 8 | ₦9.730bn | 10% | ₦11.499bn | -₦1.769bn | -₦773m |

Month eight is the joke mathematics tells after everyone else has stopped laughing.

![Illustrative MMM-style cash-flow simulation](/images/research/republic-of-30-percent-nigeria-ponzi-schemes/mmm_sim.svg)

*Figure 3. It is still growing. It is already dead.*  
Source: Seven Gates illustrative model. Not actual MMM cash-flow data.

The scheme receives more new money than in any previous month: nearly ₦9.73 billion. Newspapers could describe "record investor interest." Promoters could show growth charts. WhatsApp groups could celebrate adoption. Yet the machine is insolvent under the simplified model because liabilities are outrunning inflows.

**The Ponzi did not run out of believers. It ran out of acceleration.**

Now compound ₦100,000 at 30 percent monthly:

`100,000(1.3)^n`

| Period | Apparent value |
|---|---:|
| Start | ₦100,000 |
| 1 month | ₦130,000 |
| 3 months | ₦219,700 |
| 6 months | ₦482,681 |
| 12 months | ~₦2.33m |
| 24 months | ~₦54.3m |
| 36 months | ~₦1.26bn |
| 48 months | ~₦29.5bn |
| 60 months | ~₦686bn |

At this point the sensible question is no longer whether the investment is legitimate. It is why Aliko Dangote bothered building a refinery.

![Thirty percent monthly compounding chart](/images/research/republic-of-30-percent-nigeria-ponzi-schemes/compounding.svg)

*Figure 4. Thirty per cent a month stops looking like investing fairly quickly.*  
Source: Seven Gates arithmetic. 100,000 x 1.3^n; rounded display values.

Real schemes are messier. There are commissions, operating expenses, theft, referral bonuses and, most dangerous of all, unexpected withdrawals. Add them:

`C_t = C_(t-1) + N_t - (1+r)N_(t-1) - W_t - E_t`

where `W_t` is unexpected withdrawals and `E_t` is expenses, commissions, fraud and leakage.

Then confidence turns from a marketing variable into a liquidity variable.

Withdrawal requests create delays.

Delays create rumours.

Rumours create more withdrawals.

More withdrawals create worse delays.

A solvency problem acquires a run.

There is a useful banking distinction here. A bank can be economically solvent but temporarily illiquid: its assets may exceed its liabilities even though the assets cannot be converted to cash fast enough to meet withdrawals. A classic Ponzi has the more embarrassing problem. It is typically illiquid because its economics were never solvent in the first place.

The crisis does not create the fraud. It forces the arithmetic to speak aloud.

MMM froze participants' access in December 2016 and subsequently collapsed as a mass phenomenon. In 2017, the NDIC said an estimated three million Nigerians had put about ₦18 billion into it. Those figures are estimates, not an audited final national ledger, but the scale is enough.

Nigeria had learned something important.

Unfortunately, so had the scammers.
