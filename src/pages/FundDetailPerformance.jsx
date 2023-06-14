import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FundDetailPerformance.module.css";
const FundDetailPerformance= () => {
  const navigate = useNavigate();

  const onBackArrowButtonClick = useCallback(() => {
    navigate("/fund-detail-1");
  }, [navigate]);

  const onBackArrowButton1Click = useCallback(() => {
    navigate("/fund-detail-1");
  }, [navigate]);

  const onLeftNavButton7Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLeftNavButton8Click = useCallback(() => {
    navigate("/firmwide-dashboard");
  }, [navigate]);

  return (
    <div className={styles.fundDetailPerformance}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
        <div className={styles.tabNavButton}>
          <div className={styles.tabNavButtonChild} />
          <div className={styles.overview}>Overview</div>
          <img
            className={styles.iconMaterialInfoOutline}
            alt=""
            src="/icon-materialinfooutline.svg"
          />
        </div>
        <div className={styles.tabNavButton1}>
          <div className={styles.tabNavButtonItem} />
          <div className={styles.rectangleGroup}>
            <div className={styles.groupInner} />
            <div className={styles.performance}>PERForMANCE</div>
            <img
              className={styles.monitoringFill0Wght400Grad0Icon}
              alt=""
              src="/monitoring-fill0-wght400-grad0-opsz48.svg"
            />
          </div>
        </div>
        <div className={styles.tabNavButton2}>
          <div className={styles.tabNavButtonChild} />
          <div className={styles.portfolio}>Portfolio</div>
          <img
            className={styles.domainFill0Wght400Grad0OpsIcon}
            alt=""
            src="/domain-fill0-wght400-grad0-opsz481.svg"
          />
        </div>
        <div className={styles.tabNavButton3}>
          <div className={styles.tabNavButtonChild} />
          <div className={styles.investors}>Investors</div>
          <img
            className={styles.handshakeFill0Wght400Grad0Icon}
            alt=""
            src="/handshake-fill0-wght400-grad0-opsz48.svg"
          />
        </div>
        <div className={styles.tabNavButton4}>
          <div className={styles.tabNavButtonChild} />
          <div className={styles.servicing}>Servicing</div>
          <img
            className={styles.designServicesFill0Wght400Icon}
            alt=""
            src="/design-services-fill0-wght400-grad0-opsz48.svg"
          />
        </div>
        <div className={styles.tabNavButton5}>
          <div className={styles.tabNavButtonChild} />
          <div className={styles.compliance}>Compliance</div>
          <img
            className={styles.factCheckFill0Wght400Grad0Icon}
            alt=""
            src="/fact-check-fill0-wght400-grad0-opsz48.svg"
          />
        </div>
      </div>
      <div className={styles.performance1}>Performance</div>
      <div className={styles.rectangleContainer}>
        <div className={styles.groupChild1} />
        <div className={styles.selectboxfilter}>
          <div className={styles.selectboxbg} />
          <div className={styles.div}>2023</div>
          <img className={styles.smallDownIcon} alt="" src="/smalldown1.svg" />
        </div>
        <div className={styles.moreVertFill0Wght400Grad0Parent}>
          <img
            className={styles.moreVertFill0Wght400Grad0Icon}
            alt=""
            src="/more-vert-fill0-wght400-grad0-opsz48.svg"
          />
          <b className={styles.detailPerformanceData}>
            Detail Performance Data
          </b>
        </div>
        <div className={styles.lineDiv} />
        <div className={styles.groupChild2} />
        <div className={styles.groupChild3} />
        <div className={styles.groupChild4} />
        <div className={styles.groupChild5} />
        <div className={styles.groupChild6} />
        <div className={styles.groupChild7} />
        <div className={styles.groupChild8} />
        <div className={styles.groupChild9} />
        <div className={styles.groupChild10} />
        <div className={styles.groupChild11} />
        <div className={styles.groupChild12} />
        <div className={styles.groupChild13} />
        <div className={styles.groupChild14} />
        <div className={styles.groupChild15} />
        <div className={styles.groupChild16} />
        <div className={styles.groupChild17} />
        <div className={styles.groupChild18} />
        <div className={styles.groupChild19} />
        <div className={styles.groupChild20} />
        <div className={styles.groupChild21} />
        <div className={styles.groupChild22} />
        <div className={styles.groupChild23} />
        <div className={styles.totalCommitmentsTo}>
          Total Commitments to Fund
        </div>
        <div className={styles.cumulativePaidIn}>
          Cumulative Paid in Capital
        </div>
        <div className={styles.cumulativeDistributionsTo}>
          Cumulative Distributions to the Investor
        </div>
        <div className={styles.ofWhich}>
          Of which - Recallable Distributions
        </div>
        <div className={styles.totalUnfundedCommitment}>
          Total Unfunded Commitment available for Drawdown
        </div>
        <div className={styles.totalInvestedIn}>
          Total invested in portfolio Companies
        </div>
        <div className={styles.totalAdditionalCommitment}>
          Total additional commitment to Portfolio Companies
        </div>
        <div className={styles.totalFairValue}>
          Total fair value of the current portfolio
        </div>
        <div className={styles.totalCashBorrowings}>
          Total cash, borrowings, other assets and liabilities
        </div>
        <div className={styles.totalNetAsset}>Total Net asset value (NAV)</div>
        <div className={styles.grossIrr}>Gross IRR</div>
        <div className={styles.grossMultipleTo}>Gross Multiple to cost</div>
        <div className={styles.fundNetIrr}>
          Fund Net IRR (after accrual for carried interest and fees)
        </div>
        <div className={styles.fundNetIrr1}>
          Fund Net IRR modified for Bridge Financing
        </div>
        <div className={styles.distributionsToPaid}>
          Distributions to Paid in Capital (DPI)
        </div>
        <div className={styles.residualValueTo}>
          Residual Value to Paid in Capital (RVPI)
        </div>
        <div className={styles.totalValueTo}>
          Total Value to Paid in Capital (TVPI)
        </div>
        <div className={styles.totalValueTo1}>
          Total Value to Paid in Capital modified for bridge financing)
        </div>
        <div className={styles.fundedCommitmentTo}>
          Funded Commitment to Committed Capital
        </div>
        <div className={styles.paidInCapital}>
          Paid in Capital to Commited Capital (PICC)
        </div>
        <div className={styles.multipleOfInvested}>
          Multiple of Invested Capital (MOIC)
        </div>
        <b className={styles.b}>100%</b>
        <b className={styles.b1}>$100,000</b>
        <b className={styles.b2}>106%</b>
        <b className={styles.b3}>$106,331</b>
        <b className={styles.b4}>63%</b>
        <b className={styles.b5}>$62,736</b>
        <b className={styles.b6}>36%</b>
        <b className={styles.b7}>$35,830</b>
        <b className={styles.b8}>29%</b>
        <b className={styles.b9}>$29,499</b>
        <b className={styles.b10}>96%</b>
        <b className={styles.b11}>$96,331</b>
        <b className={styles.b12}>$15,000</b>
        <b className={styles.b13}>$81,702</b>
        <b className={styles.b14}>$0</b>
        <b className={styles.b15}>$81,702</b>
        <b className={styles.b16}>24.5%</b>
        <b className={styles.b17}>1.50</b>
        <b className={styles.b18}>14.8%</b>
        <b className={styles.b19}>14.2%</b>
        <b className={styles.b20}>0.59</b>
        <b className={styles.b21}>0.70</b>
        <b className={styles.b22}>1.29</b>
        <b className={styles.b23}>1.29</b>
        <b className={styles.b24}>0.71</b>
        <b className={styles.b25}>106.3%</b>
        <b className={styles.b26}>0%</b>
        <div className={styles.filterButton}>
          <div className={styles.committedCapital}>2023</div>
          <img
            className={styles.filterButtonChild}
            alt=""
            src="/polygon-10.svg"
          />
        </div>
        <div className={styles.filterButton1}>
          <div className={styles.committedCapital}>% Committed Capital</div>
          <img
            className={styles.filterButtonChild}
            alt=""
            src="/polygon-10.svg"
          />
        </div>
      </div>
      <div className={styles.fundDetailPerformanceInner}>
        <div className={styles.maskGroup35Parent}>
          <img
            className={styles.maskGroup35}
            alt=""
            src="/mask-group-35@2x.png"
          />
          <div className={styles.privateHealthcareFundIiiParent}>
            <div className={styles.privateHealthcareFundContainer}>
              <p
                className={styles.privateHealthcare}
              >{`Private Healthcare `}</p>
              <p className={styles.privateHealthcare}>Fund III</p>
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
          </div>
        </div>
      </div>
      <div className={styles.fundDetailPerformanceChild} />
      <div className={styles.groupDiv}>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
        <div className={styles.tabNavButton}>
          <div className={styles.tabNavButtonChild} />
          <div className={styles.overview}>Overview</div>
          <img
            className={styles.iconMaterialInfoOutline}
            alt=""
            src="/icon-materialinfooutline.svg"
          />
        </div>
        <div className={styles.tabNavButton1}>
          <div className={styles.tabNavButtonItem} />
          <div className={styles.rectangleGroup}>
            <div className={styles.groupInner} />
            <div className={styles.performance}>PERFROMANCE</div>
            <img
              className={styles.monitoringFill0Wght400Grad0Icon}
              alt=""
              src="/monitoring-fill0-wght400-grad0-opsz48.svg"
            />
          </div>
        </div>
        <div className={styles.tabNavButton2}>
          <div className={styles.tabNavButtonChild} />
          <div className={styles.portfolio}>Portfolio</div>
          <img
            className={styles.domainFill0Wght400Grad0OpsIcon}
            alt=""
            src="/domain-fill0-wght400-grad0-opsz481.svg"
          />
        </div>
        <div className={styles.tabNavButton3}>
          <div className={styles.tabNavButtonChild} />
          <div className={styles.investors}>Investors</div>
          <img
            className={styles.handshakeFill0Wght400Grad0Icon}
            alt=""
            src="/handshake-fill0-wght400-grad0-opsz48.svg"
          />
        </div>
        <div className={styles.tabNavButton4}>
          <div className={styles.tabNavButtonChild} />
          <div className={styles.servicing}>Servicing</div>
          <img
            className={styles.designServicesFill0Wght400Icon}
            alt=""
            src="/design-services-fill0-wght400-grad0-opsz48.svg"
          />
        </div>
        <div className={styles.tabNavButton5}>
          <div className={styles.tabNavButtonChild} />
          <div className={styles.compliance}>Compliance</div>
          <img
            className={styles.factCheckFill0Wght400Grad0Icon}
            alt=""
            src="/fact-check-fill0-wght400-grad0-opsz48.svg"
          />
        </div>
      </div>
      <div className={styles.maskGroup35Group}>
        <img
          className={styles.maskGroup351}
          alt=""
          src="/mask-group-351@2x.png"
        />
        <div className={styles.nexusHealthEquityFundParent}>
          <div className={styles.nexusHealthEquity}>
            Nexus Health Equity Fund
          </div>
          <img
            className={styles.backArrowButton1}
            alt=""
            src="/back-arrow-button1.svg"
            onClick={onBackArrowButton1Click}
          />
          <div className={styles.maskGroup38Container}>
            <img
              className={styles.maskGroup381}
              alt=""
              src="/mask-group-381@2x.png"
            />
          </div>
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
      <div className={styles.navbarbgParent}>
        <img className={styles.navbarbgIcon} alt="" src="/navbarbg.svg" />
        <img className={styles.userMenuIcon} alt="" src="/user-menu.svg" />
        <div className={styles.groupParent}>
          <img className={styles.groupIcon} alt="" src="/group-330.svg" />
          <div className={styles.maskGroup35Parent}>
            <div className={styles.maskGroup35Parent}>
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
      <div className={styles.navDrawerLeft}>
        <div className={styles.maskGroup35Parent}>
          <div className={styles.maskGroup35Parent}>
            <img className={styles.path428Icon} alt="" src="/path-428.svg" />
            <div className={styles.leftNavButton}>
              <div className={styles.leftNavButtonChild} />
              <div className={styles.maskGroup35Parent} />
              <div className={styles.leftNavButtonInner} />
              <img
                className={styles.storefrontFill1Wght400Grad0Icon}
                alt=""
                src="/storefront-fill1-wght400-grad0-opsz48.svg"
              />
            </div>
            <div className={styles.leftNavButton1}>
              <div className={styles.maskGroup35Parent} />
              <img
                className={styles.notificationsFill0Wght400GrIcon}
                alt=""
                src="/notifications-fill0-wght400-grad0-opsz48.svg"
              />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="/ellipse-58.svg"
              />
              <div className={styles.div2}>4</div>
            </div>
            <div className={styles.leftNavButton2}>
              <div className={styles.maskGroup35Parent}>
                <img
                  className={styles.iconAwesomeTasks}
                  alt=""
                  src="/icon-awesometasks.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton3}>
              <div className={styles.maskGroup35Parent}>
                <img
                  className={styles.manageAccountsFill0Wght400Icon}
                  alt=""
                  src="/manage-accounts-fill0-wght400-grad0-opsz48-1.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton4}>
              <div className={styles.maskGroup35Parent}>
                <img
                  className={styles.homeStorageFill0Wght400GraIcon}
                  alt=""
                  src="/home-storage-fill0-wght400-grad0-opsz48.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton5}>
              <div className={styles.maskGroup35Parent} />
              <img
                className={styles.settingsFill0Wght400Grad0OIcon}
                alt=""
                src="/settings-fill0-wght400-grad0-opsz48.svg"
              />
            </div>
            <div className={styles.leftNavButton6}>
              <div className={styles.maskGroup35Parent} />
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
              <div className={styles.maskGroup35Parent} />
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
              <div className={styles.maskGroup35Parent} />
              <img
                className={styles.domainFill0Wght400Grad0OpsIcon2}
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
                className={styles.chevronRightFill0Wght400GrIcon}
                alt=""
                src="/chevron-right-fill0-wght400-grad0-opsz48-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.component20935}
        alt=""
        src="/component-209--27.svg"
      />
    </div>
  );
};

export default FundDetailPerformance;
