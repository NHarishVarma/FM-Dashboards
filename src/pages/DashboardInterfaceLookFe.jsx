import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./DashboardInterfaceLookFe.module.css";
const DashboardInterfaceLookFe= () => {
  const navigate = useNavigate();

  const onOpendMenuIconClick = useCallback(() => {
    navigate("/dashboard-interface-look-feel-5");
  }, [navigate]);

  return (
    <div className={styles.dashboardInterfaceLookFe}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
        <div className={styles.groupInner} />
        <div className={styles.lineDiv} />
        <div className={styles.groupChild1} />
        <div className={styles.componeseeMoreButtonnt254}>
          <div className={styles.seeMore}>See More</div>
          <img
            className={styles.iconMaterialArrowForward}
            alt=""
            src="/icon-materialarrowforward.svg"
          />
        </div>
        <div className={styles.announcingPennRoundtableContainer}>
          <p
            className={styles.announcingPennRoundtable}
          >{`Announcing PENN Roundtable 2 Recap: Third-Party Support for `}</p>
          <p className={styles.announcingPennRoundtable}>Your VC Fund</p>
        </div>
        <div className={styles.schedulesK2And}>
          Schedules K-2 and K-3: What does this mean for your Fund managers?
        </div>
        <div className={styles.introducingNewFeatures}>
          Introducing: new features to our Investor Dashboard
        </div>
        <img
          className={styles.iconMaterialMoreVert}
          alt=""
          src="/icon-materialmorevert.svg"
        />
        <img
          className={styles.iconMaterialMoreVert1}
          alt=""
          src="/icon-materialmorevert.svg"
        />
        <img
          className={styles.iconMaterialMoreVert2}
          alt=""
          src="/icon-materialmorevert.svg"
        />
        <div className={styles.notificationsParent}>
          <div className={styles.notifications}>Notifications</div>
          <div className={styles.notificationsFill0Wght400GrParent}>
            <img
              className={styles.notificationsFill0Wght400GrIcon}
              alt=""
              src="/notifications-fill0-wght400-grad0-opsz481.svg"
            />
            <div className={styles.ellipseParent}>
              <img
                className={styles.ellipseIcon}
                alt=""
                src="/ellipse-56.svg"
              />
              <div className={styles.div}>4</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.myInvestments}>My Investments</div>
      <div className={styles.performance}>Performance</div>
      <div className={styles.bgParent}>
        <div className={styles.bg} />
        <div className={styles.privateEquity}>Private Equity</div>
        <b className={styles.consumerGoodsRetailEnhancem}>
          Consumer Goods Retail Enhancement Fund
        </b>
        <b className={styles.b}>15% - 20%</b>
        <b className={styles.b1}>$100,000</b>
        <b className={styles.quarterly}>Quarterly</b>
        <img
          className={styles.favoriteButtonIcon}
          alt=""
          src="/favorite-button.svg"
        />
        <div className={styles.maskGroup11Wrapper}>
          <img
            className={styles.maskGroup11}
            alt=""
            src="/mask-group-111@2x.png"
          />
        </div>
        <div className={styles.label}>
          <b className={styles.labelcontent}>NOW OPEN</b>
        </div>
        <img
          className={styles.chevronRightFill0Wght400GrIcon}
          alt=""
          src="/chevron-right-fill0-wght400-grad0-opsz48.svg"
        />
        <img className={styles.addToCompare} alt="" src="/add-to-compare.svg" />
      </div>
      <div className={styles.bgGroup}>
        <div className={styles.bg} />
        <div className={styles.realEstate}>Real Estate</div>
        <b className={styles.pennRealEstate}>Penn Real Estate Fund III</b>
        <b className={styles.b2}>15% - 20%</b>
        <b className={styles.b3}>$500,000</b>
        <div className={styles.label1}>
          <div className={styles.labelbg} />
          <b className={styles.labelcontent1}>Updated Jan 20</b>
          <img
            className={styles.updateFill0Wght400Grad0OpsIcon}
            alt=""
            src="/update-fill0-wght400-grad0-opsz48.svg"
          />
        </div>
        <b className={styles.yearly}>Yearly</b>
        <img
          className={styles.favoriteButtonIcon1}
          alt=""
          src="/favorite-button.svg"
        />
        <div className={styles.maskGroup11Wrapper}>
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
        <img
          className={styles.maskGroup31}
          alt=""
          src="/mask-group-311@2x.png"
        />
        <div className={styles.image} />
        <img
          className={styles.addToCompare1}
          alt=""
          src="/add-to-compare.svg"
        />
      </div>
      <div className={styles.bgContainer}>
        <img className={styles.bgIcon} alt="" src="/bg.svg" />
        <div className={styles.hedgeFund}>Hedge Fund</div>
        <b className={styles.pennRealEstate}>Infrastructure Fund</b>
        <b className={styles.b4}>15% - 20%</b>
        <b className={styles.b5}>$100,000</b>
        <b className={styles.quarterly1}>Quarterly</b>
        <img
          className={styles.favoriteButtonIcon2}
          alt=""
          src="/favorite-button.svg"
        />
        <div className={styles.maskGroup11Wrapper}>
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
        <img
          className={styles.maskGroup28}
          alt=""
          src="/mask-group-282@2x.png"
        />
        <div className={styles.image1} />
        <img
          className={styles.addToCompare2}
          alt=""
          src="/add-to-compare.svg"
        />
        <div className={styles.label2}>
          <div className={styles.labelbg} />
          <b className={styles.labelcontent2}>Updated Feb 12</b>
          <img
            className={styles.updateFill0Wght400Grad0OpsIcon}
            alt=""
            src="/update-fill0-wght400-grad0-opsz48.svg"
          />
        </div>
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.bg} />
        <div className={styles.ventureCapital}>Venture Capital</div>
        <b className={styles.pennRealEstate}>Angel Fund IV</b>
        <b className={styles.b6}>15% - 20%</b>
        <b className={styles.b7}>$100,000</b>
        <b className={styles.quarterly2}>Quarterly</b>
        <div className={styles.label3}>
          <b className={styles.labelcontent3}>CLOSED</b>
        </div>
        <img
          className={styles.favoriteButtonIcon3}
          alt=""
          src="/favorite-button.svg"
        />
        <div className={styles.maskGroup11Wrapper}>
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
        <img
          className={styles.addToCompare3}
          alt=""
          src="/add-to-compare.svg"
        />
        <div className={styles.maskGroup23Wrapper}>
          <img
            className={styles.maskGroup11}
            alt=""
            src="/mask-group-23@2x.png"
          />
        </div>
      </div>
      <div className={styles.bgParent1}>
        <div className={styles.bg} />
        <div className={styles.privateEquity1}>Private Equity</div>
        <b className={styles.consumerGoodsRetailEnhancem}>
          ProFunds UltraSector Health Care Fund
        </b>
        <b className={styles.b8}>15% - 20%</b>
        <b className={styles.b9}>$100,000</b>
        <b className={styles.quarterly3}>Quarterly</b>
        <img
          className={styles.favoriteButtonIcon4}
          alt=""
          src="/favorite-button.svg"
        />
        <div className={styles.maskGroup11Wrapper}>
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
        <img
          className={styles.addToCompare4}
          alt=""
          src="/add-to-compare.svg"
        />
        <img
          className={styles.maskGroup34}
          alt=""
          src="/mask-group-34@2x.png"
        />
        <div className={styles.image2} />
        <div className={styles.label4}>
          <b className={styles.labelcontent3}>CLOSED</b>
        </div>
      </div>
      <div className={styles.bgParent2}>
        <div className={styles.bg} />
        <div className={styles.privateEquity1}>Private Equity</div>
        <b className={styles.consumerGoodsRetailEnhancem}>
          Hussman Strategic Total Return Fund
        </b>
        <b className={styles.b8}>15% - 20%</b>
        <b className={styles.b9}>$100,000</b>
        <b className={styles.quarterly4}>Quarterly</b>
        <img
          className={styles.favoriteButtonIcon5}
          alt=""
          src="/favorite-button.svg"
        />
        <div className={styles.maskGroup11Wrapper}>
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
        <img
          className={styles.addToCompare5}
          alt=""
          src="/add-to-compare.svg"
        />
        <img className={styles.imageIcon} alt="" src="/image@2x.png" />
        <div className={styles.image3} />
        <div className={styles.label5}>
          <b className={styles.labelcontent3}>CLOSED</b>
        </div>
      </div>
      <div className={styles.bgParent3}>
        <div className={styles.bg} />
        <div className={styles.privateEquity3}>Private Equity</div>
        <b className={styles.pennRealEstate}>Rydex Nova Fund</b>
        <b className={styles.b12}>15% - 20%</b>
        <b className={styles.b13}>$100,000</b>
        <b className={styles.quarterly5}>Quarterly</b>
        <img
          className={styles.favoriteButtonIcon6}
          alt=""
          src="/favorite-button.svg"
        />
        <div className={styles.maskGroup11Wrapper}>
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
        <img
          className={styles.addToCompare6}
          alt=""
          src="/add-to-compare.svg"
        />
        <img
          className={styles.maskGroup26}
          alt=""
          src="/mask-group-26@2x.png"
        />
        <div className={styles.image4} />
        <div className={styles.label6}>
          <b className={styles.labelcontent3}>CLOSED</b>
        </div>
      </div>
      <div className={styles.liquidity}>LIQUIDITY</div>
      <div className={styles.targetReturn}>TARGET RETURN</div>
      <div className={styles.fundType}>Fund Type</div>
      <div className={styles.investment}>Investment</div>
      <div className={styles.minimum}>MINIMUM</div>
      <div className={styles.statisticsbg} />
      <div className={styles.chartGrid}>
        <div className={styles.xAxis1} />
        <div className={styles.xAxis2} />
        <div className={styles.xAxis3} />
        <div className={styles.xAxis4} />
        <div className={styles.xAxis5} />
        <div className={styles.yAxis1} />
        <div className={styles.yAxis2} />
        <div className={styles.yAxis3} />
        <div className={styles.yAxis4} />
        <div className={styles.yAxis5} />
        <div className={styles.yAxis6} />
      </div>
      <div className={styles.months}>
        <div className={styles.div1}>2018</div>
        <div className={styles.div2}>2019</div>
        <div className={styles.div3}>2020</div>
        <div className={styles.div4}>2021</div>
        <div className={styles.div5}>2022</div>
        <div className={styles.div6}>2023</div>
      </div>
      <div className={styles.totalViewsLabel}>
        <div className={styles.fundOfFunds}>Fund of Funds</div>
        <div className={styles.label7} />
      </div>
      <div className={styles.productsSoldLabel}>
        <div className={styles.fundOfFunds}>PE Funds</div>
        <div className={styles.label8} />
      </div>
      <div className={styles.productsSoldLabel1}>
        <div className={styles.fundOfFunds}>Hedge Funds</div>
        <div className={styles.label9} />
      </div>
      <div className={styles.keyPerformanceIndicators}>
        Key Performance Indicators
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupChild} />
        <div className={styles.documents}>Documents</div>
        <div className={styles.scrollGroup2}>
          <div className={styles.scrollGroup2Child} />
          <div className={styles.scrollGroup2Item} />
          <div className={styles.scrollGroup2Inner} />
          <div className={styles.scrollGroup2Child1} />
          <div className={styles.scrollGroup2Child2} />
          <img
            className={styles.fileOpenFill0Wght400Grad0Icon}
            alt=""
            src="/file-open-fill0-wght400-grad0-opsz48.svg"
          />
          <img
            className={styles.fileOpenFill0Wght400Grad0Icon1}
            alt=""
            src="/file-open-fill0-wght400-grad0-opsz48.svg"
          />
          <img
            className={styles.fileOpenFill0Wght400Grad0Icon2}
            alt=""
            src="/file-open-fill0-wght400-grad0-opsz48.svg"
          />
          <img
            className={styles.fileOpenFill0Wght400Grad0Icon3}
            alt=""
            src="/file-open-fill0-wght400-grad0-opsz48.svg"
          />
          <img
            className={styles.fileOpenFill0Wght400Grad0Icon4}
            alt=""
            src="/file-open-fill0-wght400-grad0-opsz48.svg"
          />
          <img
            className={styles.fileOpenFill0Wght400Grad0Icon5}
            alt=""
            src="/file-open-fill0-wght400-grad0-opsz48.svg"
          />
          <img
            className={styles.fileOpenFill0Wght400Grad0Icon6}
            alt=""
            src="/file-open-fill0-wght400-grad0-opsz48.svg"
          />
          <img
            className={styles.fileOpenFill0Wght400Grad0Icon7}
            alt=""
            src="/file-open-fill0-wght400-grad0-opsz48.svg"
          />
          <img
            className={styles.fileOpenFill0Wght400Grad0Icon8}
            alt=""
            src="/file-open-fill0-wght400-grad0-opsz48.svg"
          />
          <img
            className={styles.fileOpenFill0Wght400Grad0Icon9}
            alt=""
            src="/file-open-fill0-wght400-grad0-opsz48.svg"
          />
          <div className={styles.groupInternationalAnnual}>
            Group International Annual Report 2022
          </div>
          <div
            className={styles.privatePlacementMemorandum}
          >{`Private Placement Memorandum `}</div>
          <div className={styles.peFundIii}>
            PE Fund III Operating Agreement
          </div>
          <div className={styles.sendGridCompany}>
            Send Grid Company Annual Report 2022
          </div>
          <div className={styles.groupInternationalAnnual1}>
            Group International Annual Report 2022
          </div>
          <div className={styles.groupInternationalAnnual2}>
            Group International Annual Report 2022
          </div>
          <div className={styles.groupInternationalAnnual3}>
            Group International Annual Report 2022
          </div>
          <div className={styles.groupInternationalAnnual4}>
            Group International Annual Report 2022
          </div>
          <div className={styles.groupInternationalAnnual5}>
            Group International Annual Report 2022
          </div>
          <div className={styles.groupInternationalAnnual6}>
            Group International Annual Report 2022
          </div>
        </div>
        <div className={styles.componeseeMoreButtonnt2541}>
          <div className={styles.seeMore}>See More</div>
          <img
            className={styles.iconMaterialArrowForward}
            alt=""
            src="/icon-materialarrowforward.svg"
          />
        </div>
      </div>
      <div className={styles.compareParent}>
        <div className={styles.compare}>Compare</div>
        <img
          className={styles.iconMaterialCompareArrows}
          alt=""
          src="/icon-materialcomparearrows.svg"
        />
      </div>
      <img
        className={styles.totalViewsGraph}
        alt=""
        src="/total-views-graph.svg"
      />
      <img
        className={styles.productsSoldGraph}
        alt=""
        src="/products-sold-graph.svg"
      />
      <div className={styles.selectboxfilter}>
        <div className={styles.selectboxbg} />
        <div className={styles.selectboxfilterChild} />
        <div className={styles.last6Months}>Last 6 months</div>
        <div className={styles.lastYear}>Last year</div>
        <div className={styles.lastTwoYears}>Last two years</div>
        <div className={styles.last5Years}>Last 5 years</div>
        <div className={styles.allTime}>All Time</div>
      </div>
      <div className={styles.dashboardInterfaceLookFeChild} />
      <div className={styles.myAccount}>My Account</div>
      <div className={styles.parent}>
        <div className={styles.div7}>$175,000</div>
        <div className={styles.peFunds1}>PE Funds</div>
        <div className={styles.div8}>$250,000</div>
        <div className={styles.vcFunds}>VC Funds</div>
        <div className={styles.div9}>$65,000</div>
        <div className={styles.hedgeFunds1}>Hedge Funds</div>
        <div className={styles.div10}>$250,000</div>
        <div className={styles.realEstateFunds}>Real Estate Funds</div>
        <div className={styles.div11}>$760,000</div>
        <div className={styles.fundOfFunds1}>Fund of Funds</div>
        <img className={styles.colorIcon} alt="" src="/color2.svg" />
      </div>
      <b className={styles.b14}>$1,500,000</b>
      <div className={styles.totalInvestmentMade}>
        Total investment made to date:
      </div>
      <img
        className={styles.dashboardInterfaceLookFeItem}
        alt=""
        src="/group-17420.svg"
      />
      <div className={styles.peFunds175000Wrapper}>
        <div className={styles.peFunds175000}>PE Funds $175,000</div>
      </div>
      <div className={styles.totalCapitalInvested}>Total Capital Invested</div>
      <div className={styles.committedCapital}>Committed Capital</div>
      <div className={styles.internalRateOf}>Internal Rate of Return (IRR)</div>
      <div className={styles.div12}>$175,000</div>
      <div className={styles.div13}>$1,500,000</div>
      <div className={styles.div14}>1.88%</div>
      <div className={styles.div15}>32.4%</div>
      <div className={styles.dashboardInterfaceLookFeInner} />
      <div className={styles.dashboardInterfaceLookFeChild1} />
      <div className={styles.dashboardInterfaceLookFeChild2} />
      <div className={styles.dashboardInterfaceLookFeChild3} />
      <div className={styles.portfolioCompanies}>Portfolio Companies</div>
      <div className={styles.capitalCalled}>Capital Called</div>
      <div className={styles.totalValueTo}>Total Value to Pain in (TVPI)</div>
      <div className={styles.publicMarketEquivalent}>
        Public Market Equivalent
      </div>
      <div className={styles.multipleOfCapital}>
        Multiple of Capital Invested (MOIC)
      </div>
      <div className={styles.exits}>Exits</div>
      <div className={styles.capitalDistributed}>Capital Distributed</div>
      <div className={styles.div16}>$750,000</div>
      <div className={styles.div17}>8</div>
      <div className={styles.div18}>193%</div>
      <div className={styles.div19}>14.4%</div>
      <div className={styles.div20}>7.1</div>
      <div className={styles.div21}>0</div>
      <div className={styles.div22}>$0</div>
      <div className={styles.dashboardInterfaceLookFeChild4} />
      <div className={styles.dashboardInterfaceLookFeChild5} />
      <div className={styles.dashboardInterfaceLookFeChild6} />
      <div className={styles.dashboardInterfaceLookFeChild7} />
      <div className={styles.dashboardInterfaceLookFeChild8} />
      <div className={styles.dashboardInterfaceLookFeChild9} />
      <div className={styles.dashboardInterfaceLookFeChild10} />
      <div className={styles.dashboardInterfaceLookFeChild11} />
      <div className={styles.componeseeMoreButtonnt2542}>
        <div className={styles.seeMore}>See More</div>
        <img
          className={styles.iconMaterialArrowForward}
          alt=""
          src="/icon-materialarrowforward.svg"
        />
      </div>
      <div className={styles.nav}>NAV</div>
      <div className={styles.yAxisInfo}>
        <div className={styles.div23}>0%</div>
        <div className={styles.div24}>5%</div>
        <div className={styles.div25}>15%</div>
        <div className={styles.div26}>20%</div>
        <div className={styles.div1}>25%</div>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.groupChild} />
        <div className={styles.tasks}>Tasks</div>
        <div className={styles.groupChild3} />
        <div className={styles.groupChild4} />
        <div className={styles.groupChild5} />
        <div className={styles.groupChild6} />
        <img className={styles.colorIcon1} alt="" src="/color3.svg" />
        <img className={styles.colorIcon2} alt="" src="/color3.svg" />
        <img className={styles.colorIcon3} alt="" src="/color3.svg" />
        <div className={styles.componeseeMoreButtonnt2543}>
          <div className={styles.seeMore}>See More</div>
          <img
            className={styles.iconMaterialArrowForward}
            alt=""
            src="/icon-materialarrowforward.svg"
          />
        </div>
        <div className={styles.joinPeFund}>
          Join PE Fund III capital call on March 31, 20223, at 3 PM EST.
        </div>
        <div className={styles.signPeFund}>Sign PE Fund Capital Agreement</div>
        <div
          className={styles.joinPennVc}
        >{`Join PENN VC Fund capital call April 4, 2023 at 3 PM EST. `}</div>
        <img
          className={styles.iconMaterialMoreVert3}
          alt=""
          src="/icon-materialmorevert.svg"
        />
        <img
          className={styles.iconMaterialMoreVert4}
          alt=""
          src="/icon-materialmorevert.svg"
        />
        <img
          className={styles.iconMaterialMoreVert5}
          alt=""
          src="/icon-materialmorevert.svg"
        />
      </div>
      <div className={styles.selectboxfilter1}>
        <div className={styles.selectboxbg1} />
        <div className={styles.div28}>2023</div>
        <img className={styles.smallDownIcon} alt="" src="/smalldown1.svg" />
      </div>
      <img
        className={styles.moreVertButtonIcon}
        alt=""
        src="/more-vert-fill0-wght400-grad0-opsz48.svg"
      />
      <div className={styles.navbarbgParent}>
        <img className={styles.navbarbgIcon} alt="" src="/navbarbg.svg" />
        <img className={styles.userMenuIcon} alt="" src="/user-menu.svg" />
        <div className={styles.groupParent}>
          <img className={styles.groupIcon} alt="" src="/group-330.svg" />
          <div className={styles.groupWrapper}>
            <div className={styles.groupWrapper}>
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
        <div className={styles.groupWrapper}>
          <div className={styles.groupWrapper}>
            <img className={styles.path428Icon} alt="" src="/path-4281.svg" />
            <div className={styles.leftNavButton}>
              <div className={styles.groupWrapper} />
              <img
                className={styles.storefrontFill0Wght400Grad0Icon}
                alt=""
                src="/storefront-fill0-wght400-grad0-opsz48.svg"
              />
            </div>
            <div className={styles.leftNavButton1}>
              <div className={styles.groupWrapper} />
              <img
                className={styles.notificationsFill0Wght400GrIcon1}
                alt=""
                src="/notifications-fill0-wght400-grad0-opsz48.svg"
              />
              <img
                className={styles.leftNavButtonInner}
                alt=""
                src="/ellipse-58.svg"
              />
              <div className={styles.div29}>4</div>
            </div>
            <div className={styles.leftNavButton2}>
              <div className={styles.groupWrapper}>
                <img
                  className={styles.iconAwesomeTasks}
                  alt=""
                  src="/icon-awesometasks.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton3}>
              <div className={styles.groupWrapper}>
                <img
                  className={styles.manageAccountsFill0Wght400Icon}
                  alt=""
                  src="/manage-accounts-fill0-wght400-grad0-opsz48-1.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton4}>
              <div className={styles.groupWrapper}>
                <img
                  className={styles.homeStorageFill0Wght400GraIcon}
                  alt=""
                  src="/home-storage-fill0-wght400-grad0-opsz48.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton5}>
              <div className={styles.groupWrapper} />
              <img
                className={styles.settingsFill0Wght400Grad0OIcon}
                alt=""
                src="/settings-fill0-wght400-grad0-opsz48.svg"
              />
            </div>
            <div className={styles.leftNavButton6}>
              <div className={styles.groupWrapper} />
              <img
                className={styles.logoutFill0Wght400Grad0OpsIcon}
                alt=""
                src="/logout-fill0-wght400-grad0-opsz48.svg"
              />
            </div>
            <div className={styles.leftNavButton7}>
              <div className={styles.leftNavButtonChild3} />
              <div className={styles.groupWrapper}>
                <img
                  className={styles.homeFill1Wght400Grad0Opsz4Icon}
                  alt=""
                  src="/home-fill1-wght400-grad0-opsz48.svg"
                />
              </div>
              <div className={styles.leftNavButtonChild4} />
            </div>
            <div className={styles.leftNavClosedChild} />
            <div className={styles.closedMenuIcon}>
              <div className={styles.closedMenuIconChild} />
              <div className={styles.closedMenuIconItem} />
              <div className={styles.closedMenuIconInner} />
              <img
                className={styles.chevronRightFill0Wght400GrIcon7}
                alt=""
                src="/chevron-right-fill0-wght400-grad0-opsz48-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.navDrawerLeftOpen}>
        <div className={styles.leftNavClosedContainer}>
          <div className={styles.groupWrapper}>
            <img className={styles.path428Icon} alt="" src="/path-429.svg" />
            <div className={styles.openNavButton}>
              <div className={styles.openNavButtonChild} />
              <img
                className={styles.storefrontFill0Wght400Grad0Icon1}
                alt=""
                src="/storefront-fill0-wght400-grad0-opsz48.svg"
              />
              <div className={styles.marketplace}>Marketplace</div>
            </div>
            <div className={styles.openNavButton1}>
              <div className={styles.openNavButtonChild} />
              <img
                className={styles.storefrontFill0Wght400Grad0Icon1}
                alt=""
                src="/storefront-fill0-wght400-grad0-opsz48.svg"
              />
              <div className={styles.marketplace1}>Marketplace</div>
              <div className={styles.openNavButtonInner} />
              <div className={styles.openNavButtonChild1} />
              <div className={styles.openNavButtonChild2} />
              <img
                className={styles.homeFill1Wght400Grad0Opsz4Icon1}
                alt=""
                src="/home-fill1-wght400-grad0-opsz48.svg"
              />
              <div className={styles.home}>Home</div>
            </div>
            <div className={styles.openNavButton2}>
              <div className={styles.openNavButtonChild} />
              <img
                className={styles.notificationsFill0Wght400GrIcon2}
                alt=""
                src="/notifications-fill0-wght400-grad0-opsz48.svg"
              />
              <div className={styles.accounts}>Notifications</div>
              <div className={styles.div30}>4</div>
            </div>
            <div className={styles.openNavButton3}>
              <div className={styles.openNavButtonChild} />
              <div className={styles.accounts}>Tasks</div>
              <div className={styles.div30}>3</div>
              <div className={styles.iconAwesomeTasksContainer}>
                <img
                  className={styles.iconAwesomeTasks}
                  alt=""
                  src="/icon-awesometasks.svg"
                />
              </div>
            </div>
            <div className={styles.openNavButton4}>
              <div className={styles.openNavButtonChild} />
              <div className={styles.accounts}>Documents</div>
              <div className={styles.homeStorageFill0Wght400GraContainer}>
                <img
                  className={styles.homeStorageFill0Wght400GraIcon}
                  alt=""
                  src="/home-storage-fill0-wght400-grad0-opsz48.svg"
                />
              </div>
            </div>
            <div className={styles.openNavButton5}>
              <div className={styles.openNavButtonChild} />
              <div className={styles.accounts}>Accounts</div>
              <div className={styles.homeStorageFill0Wght400GraContainer}>
                <img
                  className={styles.manageAccountsFill0Wght400Icon}
                  alt=""
                  src="/manage-accounts-fill0-wght400-grad0-opsz48-1.svg"
                />
              </div>
            </div>
            <div className={styles.openNavButton6}>
              <div className={styles.openNavButtonChild} />
              <div className={styles.accounts}>Settings</div>
              <div className={styles.homeStorageFill0Wght400GraContainer} />
              <img
                className={styles.settingsFill0Wght400Grad0OIcon1}
                alt=""
                src="/settings-fill0-wght400-grad0-opsz48.svg"
              />
            </div>
            <div className={styles.openNavButton7}>
              <div className={styles.accounts}>{`Logout `}</div>
              <div className={styles.homeStorageFill0Wght400GraContainer} />
              <img
                className={styles.logoutFill0Wght400Grad0OpsIcon1}
                alt=""
                src="/logout-fill0-wght400-grad0-opsz48.svg"
              />
            </div>
            <div
              className={styles.opendMenuIcon}
              onClick={onOpendMenuIconClick}
            >
              <div className={styles.closedMenuIconChild} />
              <div className={styles.closedMenuIconItem} />
              <div className={styles.closedMenuIconInner} />
              <img
                className={styles.chevronRightFill0Wght400GrIcon8}
                alt=""
                src="/chevron-right-fill0-wght400-grad0-opsz48-11.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.navDrawerLeftOpenChild} />
      </div>
      <img
        className={styles.component20929}
        alt=""
        src="/component-209--29.svg"
      />
      <div className={styles.investorDashboard}>Investor Dashboard</div>
      <div className={styles.welcomeBackJonathan}>Welcome Back, Jonathan</div>
    </div>
  );
};

export default DashboardInterfaceLookFe;
