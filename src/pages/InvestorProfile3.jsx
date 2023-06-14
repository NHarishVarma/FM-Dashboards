import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./InvestorProfile3.module.css";
const InvestorProfile3= () => {
  const navigate = useNavigate();

  const onTabButtonContainerClick = useCallback(() => {
    navigate("/investor-profile-2");
  }, [navigate]);

  const onTabButtonContainer1Click = useCallback(() => {
    navigate("/investor-profile-1");
  }, [navigate]);

  const onComponeSeeMoreButtonnt254Click = useCallback(() => {
    navigate("/fund-detail-performance");
  }, [navigate]);

  const onComponeSeeMoreButtonnt2541Click = useCallback(() => {
    navigate("/fund-detail-performance");
  }, [navigate]);

  const onTabButtonContainer2Click = useCallback(() => {
    navigate("/investor-profile-5");
  }, [navigate]);

  const onBackArrowButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onBackArrowButton1Click = useCallback(() => {
    navigate("/capital-call-detail-1-2");
  }, [navigate]);

  const onLeftNavButton7Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLeftNavButton8Click = useCallback(() => {
    navigate("/firmwide-dashboard");
  }, [navigate]);

  return (
    <div className={styles.investorProfile3}>
      <div className={styles.investorProfile3Child} />
      <div className={styles.investorProfile3Item} />
      <div className={styles.tabButton} onClick={onTabButtonContainerClick}>
        <div className={styles.tabButtonChild} />
        <div className={styles.investmentProfile}>{`Investment Profile `}</div>
        <img
          className={styles.financeChipFill0Wght400GraIcon}
          alt=""
          src="/finance-chip-fill0-wght400-grad0-opsz48-1.svg"
        />
      </div>
      <div className={styles.tabButton1} onClick={onTabButtonContainer1Click}>
        <div className={styles.tabButtonChild} />
        <div className={styles.bankingInformation}>Banking Information</div>
        <img
          className={styles.accountBalanceFill0Wght400Icon}
          alt=""
          src="/account-balance-fill0-wght400-grad0-opsz48.svg"
        />
      </div>
      <div className={styles.groupParent}>
        <div className={styles.bgParent}>
          <div className={styles.bg} />
          <div className={styles.groupContainer}>
            <div className={styles.maskGroup11Wrapper}>
              <img
                className={styles.maskGroup11}
                alt=""
                src="/mask-group-111@2x.png"
              />
            </div>
            <img
              className={styles.maskGroup31}
              alt=""
              src="/mask-group-31@2x.png"
            />
          </div>
          <div className={styles.pennRealEstate}>Penn Real Estate Fund III</div>
          <b className={styles.realEstate}>Real Estate</b>
          <b className={styles.b}>$10,000,000</b>
          <b className={styles.b1}>$8,000,000</b>
          <b className={styles.jMathews}>J. Mathews</b>
          <b className={styles.b2}>8</b>
          <b className={styles.b3}>20</b>
          <img
            className={styles.chevronRightFill0Wght400GrIcon}
            alt=""
            src="/chevron-right-fill0-wght400-grad0-opsz48.svg"
          />
          <div className={styles.vintage2018}>Vintage: 2018</div>
          <div className={styles.label}>
            <b className={styles.labelcontent}>Closed</b>
          </div>
        </div>
        <div className={styles.bgGroup}>
          <div className={styles.bg} />
          <div className={styles.pennRealEstate}>
            ProFunds UltraSector Health Care Fund
          </div>
          <b className={styles.realEstate}>Private Equity</b>
          <b className={styles.b}>$40,000,000</b>
          <b className={styles.b1}>$28,000,000</b>
          <b className={styles.jMathews}>J. Mathews</b>
          <b className={styles.b2}>8</b>
          <b className={styles.b3}>20</b>
          <img
            className={styles.chevronRightFill0Wght400GrIcon1}
            alt=""
            src="/chevron-right-fill0-wght400-grad0-opsz48.svg"
          />
          <div className={styles.groupDiv}>
            <div className={styles.maskGroup11Container}>
              <img
                className={styles.maskGroup11}
                alt=""
                src="/mask-group-111@2x.png"
              />
            </div>
            <img
              className={styles.maskGroup28}
              alt=""
              src="/mask-group-281@2x.png"
            />
          </div>
          <div className={styles.vintage2020}>Vintage: 2020</div>
          <div className={styles.label}>
            <b className={styles.labelcontent}>Closed</b>
          </div>
        </div>
        <div className={styles.status}>Status</div>
        <div className={styles.committed}>Committed</div>
        <div className={styles.funded}>Funded</div>
        <div className={styles.manager}>Manager</div>
        <div className={styles.portfolioCompanies}>Portfolio Companies</div>
        <div className={styles.ofInvestors}># of investors</div>
        <div className={styles.type}>Type</div>
        <div className={styles.investment}>Investment</div>
        <div className={styles.fundsInvestedIn}>Funds Invested In</div>
        <div className={styles.bgContainer}>
          <div className={styles.bg} />
          <div className={styles.pennRealEstate}>
            <p className={styles.privateHealthcare}>{`Private Healthcare `}</p>
            <p className={styles.privateHealthcare}>Fund III</p>
          </div>
          <div className={styles.vintage2023}>Vintage: 2023</div>
          <b className={styles.realEstate}>Private Equity</b>
          <b className={styles.b}>$40,000,000</b>
          <b className={styles.b1}>$28,000,000</b>
          <b className={styles.jMathews}>J. Mathews</b>
          <b className={styles.b2}>8</b>
          <b className={styles.b3}>20</b>
          <div className={styles.maskGroup11Frame}>
            <img
              className={styles.maskGroup11}
              alt=""
              src="/mask-group-111@2x.png"
            />
          </div>
          <img
            className={styles.chevronRightFill0Wght400GrIcon}
            alt=""
            src="/chevron-right-fill0-wght400-grad0-opsz48.svg"
          />
          <div className={styles.label2}>
            <b className={styles.labelcontent2}>OPEN</b>
          </div>
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <b className={styles.performanceMetrics}>Performance Metrics</b>
        <div className={styles.lineParent}>
          <div className={styles.groupItem} />
          <div className={styles.groupInner} />
          <div className={styles.lineDiv} />
          <div className={styles.groupChild1} />
          <div className={styles.groupChild2} />
          <div className={styles.groupChild3} />
          <div className={styles.groupChild4} />
          <div className={styles.groupChild5} />
          <div className={styles.netAssetValue}>Net Asset Value (NAV)​</div>
          <div className={styles.internalRateOf}>
            Internal Rate of Return (IRR)​
          </div>
          <div className={styles.multipleOfInvested}>
            Multiple of Invested Capital (MOIC)​
          </div>
          <div className={styles.paidInCapital}>Paid In Capital (PIC)​</div>
          <div className={styles.distributedToPaid}>
            Distributed to Paid in Capital (DPI)​
          </div>
          <div className={styles.residualValueTo}>
            Residual Value to Paid in Capital (RVPI)​
          </div>
          <div className={styles.totalValueTo}>
            Total Value to Paid in Capital (TVPI)​
          </div>
          <b className={styles.b12}>$81,702</b>
          <b className={styles.b13}>24.5%</b>
          <b className={styles.b14}>0</b>
          <b className={styles.b15}>106.3%</b>
          <b className={styles.b16}>0.59</b>
          <b className={styles.b17}>0.70</b>
          <b className={styles.b18}>1.29</b>
        </div>
        <div className={styles.selectboxfilter}>
          <div className={styles.selectboxbg} />
          <div className={styles.all}>All</div>
          <img className={styles.smallDownIcon} alt="" src="/smalldown1.svg" />
        </div>
        <img
          className={styles.moreVertFill0Wght400Grad0Icon}
          alt=""
          src="/more-vert-fill0-wght400-grad0-opsz48.svg"
        />
        <div
          className={styles.componeseeMoreButtonnt254}
          onClick={onComponeSeeMoreButtonnt254Click}
        >
          <div className={styles.seeMore}>See More</div>
          <img
            className={styles.iconMaterialArrowForward}
            alt=""
            src="/icon-materialarrowforward.svg"
          />
        </div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupChild} />
        <div className={styles.scrollGroup13}>
          <img className={styles.path455Icon} alt="" src="/path-4552.svg" />
          <div className={styles.reneeWilliams}>Renee Williams</div>
          <img className={styles.path455Icon1} alt="" src="/path-4552.svg" />
          <div className={styles.reneeWilliams1}>Renee Williams</div>
          <img className={styles.path455Icon2} alt="" src="/path-4552.svg" />
          <div className={styles.steeleAndersen}>Steele Andersen</div>
          <img className={styles.path455Icon3} alt="" src="/path-4552.svg" />
          <div className={styles.steeleAndersen1}>Steele Andersen</div>
          <img className={styles.path455Icon4} alt="" src="/path-4552.svg" />
          <div className={styles.reneeWilliams2}>Renee Williams</div>
          <img className={styles.path455Icon5} alt="" src="/path-4552.svg" />
          <div className={styles.reneeWilliams3}>Renee Williams</div>
          <img className={styles.path473Icon} alt="" src="/path-4553.svg" />
          <div className={styles.allanFrank}>Allan Frank</div>
          <img className={styles.path455Icon7} alt="" src="/path-4553.svg" />
          <div className={styles.hecklerLlp}>Heckler LLP</div>
          <img className={styles.path455Icon8} alt="" src="/path-4553.svg" />
          <div className={styles.hecklerLlp1}>Heckler LLP</div>
          <img className={styles.path455Icon9} alt="" src="/path-4553.svg" />
          <div className={styles.alfredTigTrust}>Alfred Tig Trust</div>
          <img className={styles.path455Icon10} alt="" src="/path-4553.svg" />
          <div className={styles.alfredTigTrust1}>Alfred Tig Trust</div>
          <img className={styles.path455Icon11} alt="" src="/path-4553.svg" />
          <div className={styles.montgomeryWill}>Montgomery Will…</div>
          <img className={styles.path455Icon12} alt="" src="/path-4553.svg" />
          <div className={styles.montgomeryWill1}>Montgomery Will…</div>
          <div className={styles.individualParent}>
            <div className={styles.individual}>Individual</div>
            <div className={styles.profileProcess}>Individual</div>
            <div className={styles.legalReview}>Individual</div>
            <div className={styles.div}>Individual</div>
            <div className={styles.complete}>Individual</div>
            <div className={styles.individual5}>Individual</div>
            <div className={styles.individual6}>Individual</div>
            <div className={styles.pensionFund}>Pension Fund</div>
            <div className={styles.pensionFund1}>Pension Fund</div>
            <div className={styles.trust}>Trust</div>
            <div className={styles.trust1}>Trust</div>
            <div className={styles.fundsCommitted}>Individual</div>
            <div className={styles.individual8}>Individual</div>
          </div>
          <div className={styles.waitingOnFundsParent}>
            <div className={styles.individual}>Waiting on Funds</div>
            <div className={styles.profileProcess}>Profile Process</div>
            <div className={styles.legalReview}>Legal Review</div>
            <div className={styles.div}>—</div>
            <div className={styles.complete}>Complete</div>
            <div className={styles.individual5}>—</div>
            <div className={styles.individual6}>Profile Process</div>
            <div className={styles.pensionFund}>Docs to Sign</div>
            <div className={styles.pensionFund1}>Docs to Sign</div>
            <div className={styles.trust}>FM Approval</div>
            <div className={styles.trust1}>—</div>
            <div className={styles.fundsCommitted}>Funds Committed</div>
            <div className={styles.individual8}>—</div>
          </div>
          <img
            className={styles.scrollGroup13Child}
            alt=""
            src="/ellipse-92.svg"
          />
          <img
            className={styles.scrollGroup13Item}
            alt=""
            src="/ellipse-92.svg"
          />
          <img
            className={styles.scrollGroup13Inner}
            alt=""
            src="/ellipse-92.svg"
          />
          <img className={styles.ellipseIcon} alt="" src="/ellipse-92.svg" />
          <img
            className={styles.scrollGroup13Child1}
            alt=""
            src="/ellipse-97.svg"
          />
          <img
            className={styles.scrollGroup13Child2}
            alt=""
            src="/ellipse-97.svg"
          />
          <img
            className={styles.scrollGroup13Child3}
            alt=""
            src="/ellipse-93.svg"
          />
          <img
            className={styles.scrollGroup13Child4}
            alt=""
            src="/ellipse-93.svg"
          />
          <img
            className={styles.scrollGroup13Child5}
            alt=""
            src="/ellipse-93.svg"
          />
        </div>
        <b className={styles.alertsNotifications}>{`Alerts & Notifications`}</b>
        <div className={styles.groupChild6} />
        <img
          className={styles.moreVertFill0Wght400Grad0Icon1}
          alt=""
          src="/more-vert-fill0-wght400-grad0-opsz48.svg"
        />
        <div className={styles.filterButton}>
          <div className={styles.name}>Status</div>
          <img
            className={styles.filterButtonChild}
            alt=""
            src="/polygon-10.svg"
          />
        </div>
        <div className={styles.filterButton1}>
          <div className={styles.name}>Name</div>
          <img
            className={styles.filterButtonChild}
            alt=""
            src="/polygon-10.svg"
          />
        </div>
        <div className={styles.filterButton2}>
          <div className={styles.name}>TYPE</div>
          <img
            className={styles.filterButtonChild}
            alt=""
            src="/polygon-10.svg"
          />
        </div>
        <div className={styles.groupChild7} />
      </div>
      <div className={styles.investorProfile3Inner}>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupChild} />
          <b className={styles.fundDocuments}>Fund Documents</b>
          <div className={styles.groupChild9} />
          <img
            className={styles.moreVertFill0Wght400Grad0Icon1}
            alt=""
            src="/more-vert-fill0-wght400-grad0-opsz48.svg"
          />
          <div className={styles.filterButton3}>
            <div className={styles.name}>TYPE</div>
            <img
              className={styles.filterButtonChild}
              alt=""
              src="/polygon-10.svg"
            />
          </div>
          <div className={styles.filterButton4}>
            <div className={styles.name}>Name</div>
            <img
              className={styles.filterButtonChild}
              alt=""
              src="/polygon-10.svg"
            />
          </div>
          <div className={styles.filterButton5}>
            <div className={styles.name}>Date</div>
            <img
              className={styles.filterButtonChild}
              alt=""
              src="/polygon-10.svg"
            />
          </div>
          <div className={styles.groupChild10} />
          <div className={styles.selectboxfilter1}>
            <div className={styles.selectboxbg} />
            <div className={styles.all}>2023</div>
            <img
              className={styles.smallDownIcon}
              alt=""
              src="/smalldown1.svg"
            />
          </div>
          <div className={styles.scrollGroup131}>
            <img className={styles.path455Icon} alt="" src="/path-4554.svg" />
            <img className={styles.path455Icon14} alt="" src="/path-4554.svg" />
            <img className={styles.path455Icon15} alt="" src="/path-4554.svg" />
            <img className={styles.path455Icon16} alt="" src="/path-4554.svg" />
            <img className={styles.path455Icon17} alt="" src="/path-4554.svg" />
            <img className={styles.path455Icon18} alt="" src="/path-4555.svg" />
            <img className={styles.path473Icon} alt="" src="/path-4556.svg" />
            <img className={styles.path455Icon20} alt="" src="/path-4556.svg" />
            <img className={styles.path455Icon21} alt="" src="/path-4556.svg" />
            <img className={styles.path455Icon22} alt="" src="/path-4556.svg" />
            <img className={styles.path455Icon23} alt="" src="/path-4557.svg" />
            <img className={styles.path455Icon24} alt="" src="/path-4556.svg" />
            <img className={styles.path455Icon25} alt="" src="/path-4557.svg" />
            <div className={styles.meetingDocParent}>
              <div className={styles.individual}>Meeting Doc</div>
              <div className={styles.profileProcess}>Notice</div>
              <div className={styles.legalReview}>Statement</div>
              <div className={styles.div}>Statement</div>
              <div className={styles.complete}>Notice</div>
              <div className={styles.individual5}>Statement</div>
              <div className={styles.individual6}>Statement</div>
              <div className={styles.pensionFund}>Notice</div>
              <div className={styles.pensionFund1}>Notice</div>
              <div className={styles.trust}>Statement</div>
              <div className={styles.trust1}>Statement</div>
              <div className={styles.fundsCommitted}>Notice</div>
              <div className={styles.individual8}>Statement</div>
            </div>
            <div className={styles.annualMeetingInformation202Parent}>
              <div className={styles.annualMeetingInformation}>
                Annual Meeting Information 2022
              </div>
              <div className={styles.capitalCallQ3}>Capital Call Q3 2022</div>
              <div className={styles.q4CapitalAccount}>
                2022 Q4 Capital Account Statement
              </div>
              <div className={styles.q4CapitalAccount1}>
                2022 Q4 Capital Account Statement
              </div>
              <div className={styles.capitalCallQ31}>Capital Call Q3 2022</div>
              <div className={styles.q4CapitalAccount2}>
                2022 Q4 Capital Account Statement
              </div>
              <div className={styles.q4CapitalAccount3}>
                2022 Q4 Capital Account Statement
              </div>
              <div className={styles.pensionFund}>Capital Call Q3 2022</div>
              <div className={styles.pensionFund1}>Capital Call Q3 2022</div>
              <div className={styles.trust}>
                2022 Q4 Capital Account Statement
              </div>
              <div className={styles.trust1}>
                2022 Q4 Capital Account Statement
              </div>
              <div className={styles.fundsCommitted}>Capital Call Q3 2022</div>
              <div className={styles.individual8}>
                2022 Q4 Capital Account Statement
              </div>
            </div>
            <div className={styles.parent}>
              <div className={styles.annualMeetingInformation}>12/3/2022</div>
              <div className={styles.capitalCallQ3}>12/3/2022</div>
              <div className={styles.q4CapitalAccount}>12/3/2022</div>
              <div className={styles.q4CapitalAccount1}>12/3/2022</div>
              <div className={styles.capitalCallQ31}>12/3/2022</div>
              <div className={styles.q4CapitalAccount2}>12/3/2022</div>
              <div className={styles.q4CapitalAccount3}>12/3/2022</div>
              <div className={styles.pensionFund}>12/3/2022</div>
              <div className={styles.pensionFund1}>12/3/2022</div>
              <div className={styles.trust}>12/3/2022</div>
              <div className={styles.trust1}>12/3/2022</div>
              <div className={styles.fundsCommitted}>12/3/2022</div>
              <div className={styles.individual8}>12/3/2022</div>
            </div>
            <img
              className={styles.descriptionFill0Wght400GradIcon}
              alt=""
              src="/description-fill0-wght400-grad0-opsz48.svg"
            />
            <img
              className={styles.descriptionFill0Wght400GradIcon1}
              alt=""
              src="/description-fill0-wght400-grad0-opsz48.svg"
            />
            <img
              className={styles.descriptionFill0Wght400GradIcon2}
              alt=""
              src="/description-fill0-wght400-grad0-opsz48.svg"
            />
            <img
              className={styles.descriptionFill0Wght400GradIcon3}
              alt=""
              src="/description-fill0-wght400-grad0-opsz48.svg"
            />
            <img
              className={styles.descriptionFill0Wght400GradIcon4}
              alt=""
              src="/description-fill0-wght400-grad0-opsz48.svg"
            />
            <img
              className={styles.descriptionFill0Wght400GradIcon5}
              alt=""
              src="/description-fill0-wght400-grad0-opsz48.svg"
            />
            <img
              className={styles.descriptionFill0Wght400GradIcon6}
              alt=""
              src="/description-fill0-wght400-grad0-opsz48.svg"
            />
            <img
              className={styles.descriptionFill0Wght400GradIcon7}
              alt=""
              src="/description-fill0-wght400-grad0-opsz48.svg"
            />
            <img
              className={styles.descriptionFill0Wght400GradIcon8}
              alt=""
              src="/description-fill0-wght400-grad0-opsz48.svg"
            />
            <img
              className={styles.descriptionFill0Wght400GradIcon9}
              alt=""
              src="/description-fill0-wght400-grad0-opsz48.svg"
            />
            <img
              className={styles.descriptionFill0Wght400GradIcon10}
              alt=""
              src="/description-fill0-wght400-grad0-opsz48.svg"
            />
            <img
              className={styles.descriptionFill0Wght400GradIcon11}
              alt=""
              src="/description-fill0-wght400-grad0-opsz48.svg"
            />
            <img
              className={styles.descriptionFill0Wght400GradIcon12}
              alt=""
              src="/description-fill0-wght400-grad0-opsz48.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.groupParent1}>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupChild} />
          <div className={styles.scrollGroup14Parent}>
            <div className={styles.scrollGroup14}>
              <div className={styles.expandedWeightLossDrugCoveParent}>
                <b className={styles.expandedWeightLossContainer}>
                  <p
                    className={styles.privateHealthcare}
                  >{`Expanded weight loss drug coverage could cost Medicare `}</p>
                  <p className={styles.privateHealthcare}>billions</p>
                </b>
                <img
                  className={styles.rectangleIcon}
                  alt=""
                  src="/rectangle-21452@2x.png"
                />
                <div className={styles.healthCare}>Health Care</div>
                <div className={styles.byJacobRobbins}>By Jacob Robbins</div>
                <div className={styles.may52023}>May 5, 2023</div>
              </div>
              <div className={styles.weightWatchersEntersTeleheaParent}>
                <b className={styles.weightWatchersEntersContainer}>
                  <p
                    className={styles.privateHealthcare}
                  >{`Weight Watchers enters telehealth prescription drug `}</p>
                  <p className={styles.privateHealthcare}>
                    space with Sequence acquisition
                  </p>
                </b>
                <img
                  className={styles.groupChild12}
                  alt=""
                  src="/rectangle-21453@2x.png"
                />
                <div className={styles.healthCare1}>Health Care</div>
                <div className={styles.byJordanRubio}>{`By Jordan Rubio `}</div>
                <div className={styles.may32023}>May 3, 2023</div>
              </div>
              <div className={styles.israelIvfStartupLooksToDeParent}>
                <b className={styles.weightWatchersEntersContainer}>
                  <p
                    className={styles.privateHealthcare}
                  >{`Israel IVF startup looks to democratize infertility coverage `}</p>
                  <p className={styles.privateHealthcare}>in the US</p>
                </b>
                <img
                  className={styles.groupChild12}
                  alt=""
                  src="/rectangle-21442@2x.png"
                />
                <div className={styles.healthCareTech}>Health Care Tech</div>
                <div className={styles.bySusanMorse}>By Susan Morse</div>
                <div className={styles.may192023}>May 19, 2023</div>
              </div>
              <div className={styles.rectangleParent2}>
                <img
                  className={styles.groupChild12}
                  alt=""
                  src="/rectangle-21443@2x.png"
                />
                <div className={styles.healthCare2}>Health Care</div>
                <div className={styles.byMarinaTemkin}>By Marina Temkin</div>
                <div className={styles.may42023}>May 4, 2023</div>
                <b className={styles.weightWatchersEntersContainer}>
                  <p
                    className={styles.privateHealthcare}
                  >{`CVS and Signify’s $8 billion deal expected to close this `}</p>
                  <p className={styles.privateHealthcare}>week</p>
                </b>
              </div>
            </div>
            <img className={styles.path460Icon} alt="" src="/path-4601.svg" />
            <img className={styles.path461Icon} alt="" src="/path-461.svg" />
          </div>
          <b className={styles.fundNews}>Fund News</b>
          <img
            className={styles.moreVertButtonIcon}
            alt=""
            src="/more-vert-fill0-wght400-grad0-opsz48.svg"
          />
        </div>
        <div className={styles.selectboxfilter2}>
          <div className={styles.selectboxbg} />
          <div className={styles.all}>Topics</div>
          <img className={styles.smallDownIcon} alt="" src="/smalldown1.svg" />
        </div>
        <div
          className={styles.componeseeMoreButtonnt2541}
          onClick={onComponeSeeMoreButtonnt2541Click}
        >
          <div className={styles.seeMore}>See More</div>
          <img
            className={styles.iconMaterialArrowForward}
            alt=""
            src="/icon-materialarrowforward.svg"
          />
        </div>
      </div>
      <div className={styles.rectangleParent3}>
        <div className={styles.groupChild} />
        <div className={styles.moreVertFill0Wght400Grad0Parent}>
          <img
            className={styles.moreVertFill0Wght400Grad0Icon3}
            alt=""
            src="/more-vert-fill0-wght400-grad0-opsz48.svg"
          />
          <b className={styles.accountTransactions}>Account Transactions</b>
        </div>
        <div className={styles.scrollGroup15Parent}>
          <div className={styles.scrollGroup15}>
            <img className={styles.path475Icon} alt="" src="/path-4553.svg" />
            <img className={styles.path477Icon} alt="" src="/path-4553.svg" />
            <img className={styles.path479Icon} alt="" src="/path-4553.svg" />
            <img className={styles.path476Icon} alt="" src="/path-4553.svg" />
            <img className={styles.path478Icon} alt="" src="/path-4553.svg" />
            <img className={styles.path474Icon} alt="" src="/path-4553.svg" />
            <img className={styles.path455Icon} alt="" src="/path-4552.svg" />
            <img className={styles.path468Icon} alt="" src="/path-4552.svg" />
            <img className={styles.path469Icon} alt="" src="/path-4552.svg" />
            <img className={styles.path470Icon} alt="" src="/path-4552.svg" />
            <img className={styles.path471Icon} alt="" src="/path-4552.svg" />
            <img className={styles.path472Icon} alt="" src="/path-4552.svg" />
            <img className={styles.path473Icon} alt="" src="/path-4553.svg" />
            <div className={styles.capitalCall}>Capital Call</div>
            <div className={styles.capitalCall1}>Capital Call</div>
            <div className={styles.capitalCall2}>Capital Call</div>
            <div className={styles.capitalCall3}>Capital Call</div>
            <div className={styles.capitalCall4}>Capital Call</div>
            <div className={styles.capitalCall5}>Capital Call</div>
            <div className={styles.distribution}>Distribution</div>
            <div className={styles.distribution1}>Distribution</div>
            <div className={styles.distribution2}>Distribution</div>
            <div className={styles.distribution3}>Distribution</div>
            <div className={styles.distribution4}>Distribution</div>
            <div className={styles.distribution5}>Distribution</div>
            <div className={styles.distribution6}>Distribution</div>
            <div className={styles.nexusHealthcareEquity}>
              Nexus Healthcare Equity
            </div>
            <div className={styles.nexusHealthcareEquity1}>
              Nexus Healthcare Equity
            </div>
            <div className={styles.nexusHealthcareEquity2}>
              Nexus Healthcare Equity
            </div>
            <div className={styles.nexusHealthcareEquity3}>
              Nexus Healthcare Equity
            </div>
            <div className={styles.nexusHealthcareEquity4}>
              Nexus Healthcare Equity
            </div>
            <div className={styles.nexusHealthcareEquity5}>
              Nexus Healthcare Equity
            </div>
            <div className={styles.nexusHealthcareEquity6}>
              Nexus Healthcare Equity
            </div>
            <div className={styles.nexusHealthcareEquity7}>
              Nexus Healthcare Equity
            </div>
            <div className={styles.nexusHealthcareEquity8}>
              Nexus Healthcare Equity
            </div>
            <div className={styles.nexusHealthcareEquity9}>
              Nexus Healthcare Equity
            </div>
            <div className={styles.nexusHealthcareEquity10}>
              Nexus Healthcare Equity
            </div>
            <div className={styles.nexusHealthcareEquity11}>
              Nexus Healthcare Equity
            </div>
            <div className={styles.nexusHealthcareEquity12}>
              Nexus Healthcare Equity
            </div>
            <div className={styles.aFrank}>A. Frank</div>
            <div className={styles.aFrank1}>A. Frank</div>
            <div className={styles.aFrank2}>A. Frank</div>
            <div className={styles.aFrank3}>A. Frank</div>
            <div className={styles.aFrank4}>A. Frank</div>
            <div className={styles.aFrank5}>A. Frank</div>
            <div className={styles.aFrank6}>A. Frank</div>
            <div className={styles.aFrank7}>A. Frank</div>
            <div className={styles.aFrank8}>A. Frank</div>
            <div className={styles.aFrank9}>A. Frank</div>
            <div className={styles.aFrank10}>A. Frank</div>
            <div className={styles.aFrank11}>A. Frank</div>
            <div className={styles.aFrank12}>A. Frank</div>
            <div className={styles.div18}>$500,000</div>
            <div className={styles.div19}>$500,000</div>
            <div className={styles.div20}>$500,000</div>
            <div className={styles.div21}>$500,000</div>
            <div className={styles.div22}>$500,000</div>
            <div className={styles.div23}>$500,000</div>
            <div className={styles.div24}>($25,000)</div>
            <div className={styles.div25}>($25,000)</div>
            <div className={styles.div26}>($25,000)</div>
            <div className={styles.div27}>($25,000)</div>
            <div className={styles.div28}>($25,000)</div>
            <div className={styles.div29}>($25,000)</div>
            <div className={styles.div30}>($25,000)</div>
            <div className={styles.div31}>09/23/22</div>
            <div className={styles.div32}>09/23/22</div>
            <div className={styles.div33}>09/23/22</div>
            <div className={styles.div34}>09/23/22</div>
            <div className={styles.div35}>09/23/22</div>
            <div className={styles.div36}>09/23/22</div>
            <div className={styles.div37}>08/10/22</div>
            <div className={styles.div38}>08/10/22</div>
            <div className={styles.div39}>08/10/22</div>
            <div className={styles.div40}>08/10/22</div>
            <div className={styles.div41}>08/10/22</div>
            <div className={styles.div42}>08/10/22</div>
            <div className={styles.div43}>08/10/22</div>
          </div>
          <div className={styles.groupChild16} />
          <div className={styles.filterButton6}>
            <div className={styles.name}>Amount</div>
            <img
              className={styles.filterButtonChild}
              alt=""
              src="/polygon-10.svg"
            />
          </div>
          <div className={styles.filterButton7}>
            <div className={styles.name}>Date</div>
            <img
              className={styles.filterButtonChild}
              alt=""
              src="/polygon-10.svg"
            />
          </div>
          <div className={styles.filterButton8}>
            <div className={styles.name}>Name</div>
            <img
              className={styles.filterButtonChild}
              alt=""
              src="/polygon-10.svg"
            />
          </div>
          <div className={styles.filterButton9}>
            <div className={styles.name}>Type</div>
            <img
              className={styles.filterButtonChild}
              alt=""
              src="/polygon-10.svg"
            />
          </div>
          <div className={styles.filterButton10}>
            <div className={styles.name}>Investor Name</div>
            <img
              className={styles.filterButtonChild}
              alt=""
              src="/polygon-10.svg"
            />
          </div>
          <div className={styles.groupChild17} />
        </div>
        <div className={styles.selectboxfilter3}>
          <div className={styles.selectboxbg} />
          <div className={styles.all}>2023</div>
          <img className={styles.smallDownIcon} alt="" src="/smalldown1.svg" />
        </div>
      </div>
      <div className={styles.tabNavButton}>
        <div className={styles.tabNavButtonChild} />
        <div className={styles.overview}>Overview</div>
        <img
          className={styles.iconMaterialInfoOutline}
          alt=""
          src="/icon-materialinfooutline.svg"
        />
      </div>
      <div className={styles.tabButton2} onClick={onTabButtonContainer2Click}>
        <div className={styles.tabButtonChild} />
        <div className={styles.personalInformation}>Personal Information</div>
        <img
          className={styles.personFill0Wght400Grad0OpsIcon}
          alt=""
          src="/person-fill0-wght400-grad0-opsz48.svg"
        />
      </div>
      <div className={styles.investorProfile3Inner1}>
        <div className={styles.rectangleContainer}>
          <img
            className={styles.maskGroup35}
            alt=""
            src="/mask-group-35@2x.png"
          />
          <div className={styles.path466Parent}>
            <img className={styles.path466Icon} alt="" src="/path-466.svg" />
            <div className={styles.nexusHealthEquity}>
              Nexus Health Equity Fund
            </div>
            <img
              className={styles.backArrowButton}
              alt=""
              src="/back-arrow-button1.svg"
              onClick={onBackArrowButtonClick}
            />
            <div className={styles.maskGroup38Wrapper}>
              <img
                className={styles.maskGroup38}
                alt=""
                src="/mask-group-38@2x.png"
              />
            </div>
            <div className={styles.vintage20231}>Vintage: 2023</div>
          </div>
        </div>
      </div>
      <div className={styles.investorProfile3Child1} />
      <div className={styles.investorProfile3Inner2}>
        <div className={styles.rectangleContainer}>
          <img className={styles.path466Icon} alt="" src="/path-465.svg" />
          <div className={styles.thomasSmith}>Thomas Smith</div>
          <img
            className={styles.backArrowButton1}
            alt=""
            src="/back-arrow-button1.svg"
            onClick={onBackArrowButton1Click}
          />
        </div>
      </div>
      <div className={styles.editSaveButton}>
        <div className={styles.editSaveButtonChild} />
        <div className={styles.edit}>Edit</div>
        <img
          className={styles.editFill0Wght400Grad0Opsz4Icon}
          alt=""
          src="/edit-fill0-wght400-grad0-opsz48-1.svg"
        />
      </div>
      <img className={styles.avatarIcon} alt="" src="/avatar@2x.png" />
      <div className={styles.navDrawerLeft}>
        <div className={styles.rectangleContainer}>
          <div className={styles.rectangleContainer}>
            <img className={styles.path428Icon} alt="" src="/path-428.svg" />
            <div className={styles.leftNavButton}>
              <div className={styles.leftNavButtonChild} />
              <div className={styles.rectangleContainer} />
              <div className={styles.leftNavButtonInner} />
              <img
                className={styles.storefrontFill1Wght400Grad0Icon}
                alt=""
                src="/storefront-fill1-wght400-grad0-opsz48.svg"
              />
            </div>
            <div className={styles.leftNavButton1}>
              <div className={styles.rectangleContainer} />
              <img
                className={styles.notificationsFill0Wght400GrIcon}
                alt=""
                src="/notifications-fill0-wght400-grad0-opsz48.svg"
              />
              <img
                className={styles.leftNavButtonChild2}
                alt=""
                src="/ellipse-58.svg"
              />
              <div className={styles.div45}>4</div>
            </div>
            <div className={styles.leftNavButton2}>
              <div className={styles.rectangleContainer}>
                <img
                  className={styles.iconAwesomeTasks}
                  alt=""
                  src="/icon-awesometasks.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton3}>
              <div className={styles.rectangleContainer}>
                <img
                  className={styles.manageAccountsFill0Wght400Icon}
                  alt=""
                  src="/manage-accounts-fill0-wght400-grad0-opsz48-1.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton4}>
              <div className={styles.rectangleContainer}>
                <img
                  className={styles.homeStorageFill0Wght400GraIcon}
                  alt=""
                  src="/home-storage-fill0-wght400-grad0-opsz48.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton5}>
              <div className={styles.rectangleContainer} />
              <img
                className={styles.settingsFill0Wght400Grad0OIcon}
                alt=""
                src="/settings-fill0-wght400-grad0-opsz48.svg"
              />
            </div>
            <div className={styles.leftNavButton6}>
              <div className={styles.rectangleContainer} />
              <img
                className={styles.logoutFill0Wght400Grad0OpsIcon}
                alt=""
                src="/logout-fill0-wght400-grad0-opsz48.svg"
              />
            </div>
            <div
              className={styles.leftNavButton7}
              onClick={onLeftNavButton7Click}
            >
              <div className={styles.rectangleContainer} />
              <img
                className={styles.homeFill0Wght300Grad0Opsz4Icon}
                alt=""
                src="/home-fill0-wght300-grad0-opsz40.svg"
              />
            </div>
            <div
              className={styles.leftNavButton8}
              onClick={onLeftNavButton8Click}
            >
              <div className={styles.rectangleContainer} />
              <img
                className={styles.domainFill0Wght400Grad0OpsIcon}
                alt=""
                src="/domain-fill0-wght400-grad0-opsz48-1.svg"
              />
            </div>
            <div className={styles.leftNavClosedChild} />
            <div className={styles.closedMenuIcon}>
              <div className={styles.closedMenuIconChild} />
              <div className={styles.closedMenuIconItem} />
              <div className={styles.closedMenuIconInner} />
              <img
                className={styles.chevronRightFill0Wght400GrIcon3}
                alt=""
                src="/chevron-right-fill0-wght400-grad0-opsz48-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.navbarbgParent}>
        <img className={styles.navbarbgIcon} alt="" src="/navbarbg.svg" />
        <img className={styles.userMenuIcon} alt="" src="/user-menu.svg" />
        <div className={styles.groupParent2}>
          <img className={styles.groupIcon} alt="" src="/group-330.svg" />
          <div className={styles.rectangleContainer}>
            <div className={styles.rectangleContainer}>
              <div className={styles.alternativeInvestmentPlatforContainer}>
                Al
                <span className={styles.t}>t</span>ernati
                <span className={styles.v}>v</span>e
              </div>
            </div>
          </div>
        </div>
        <div className={styles.searchParent}>
          <div className={styles.search}>Search</div>
          <img
            className={styles.iconactionsearch24px}
            alt=""
            src="/iconactionsearch-24px.svg"
          />
        </div>
      </div>
      <img
        className={styles.component20940}
        alt=""
        src="/component-209--27.svg"
      />
    </div>
  );
};

export default InvestorProfile3;
