import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./InvestorProfile.module.css";
const InvestorProfile= () => {
  const navigate = useNavigate();

  const onTabButtonContainer1Click = useCallback(() => {
    navigate("/investor-profile-2");
  }, [navigate]);

  const onTabButtonContainer2Click = useCallback(() => {
    navigate("/investor-profile-1");
  }, [navigate]);

  const onBackArrowButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLeftNavButton7Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLeftNavButton8Click = useCallback(() => {
    navigate("/firmwide-dashboard");
  }, [navigate]);

  return (
    <div className={styles.investorProfile}>
      <div className={styles.investorProfileChild} />
      <div className={styles.investorProfileItem} />
      <div className={styles.investorProfileInner} />
      <img className={styles.avatarIcon} alt="" src="/avatar@2x.png" />
      <div className={styles.label}>
        <div className={styles.firstName}>First Name</div>
        <img className={styles.path297Icon} alt="" src="/path-297.svg" />
        <div className={styles.thomas}>Thomas</div>
      </div>
      <div className={styles.label1}>
        <div className={styles.firstName}>Address Line 1</div>
        <img className={styles.path297Icon} alt="" src="/path-297.svg" />
        <div className={styles.thomas}>{`1234 First Ave. `}</div>
      </div>
      <div className={styles.label2}>
        <div className={styles.firstName}>Zip Code</div>
        <img className={styles.path297Icon} alt="" src="/path-297.svg" />
        <div className={styles.thomas}>98765</div>
      </div>
      <div className={styles.label3}>
        <div className={styles.firstName}>Spouse Pre-Tax Income</div>
        <img className={styles.path297Icon} alt="" src="/path-297.svg" />
        <div className={styles.thomas}>Spouse Pre-Tax Income</div>
      </div>
      <div className={styles.label4}>
        <div className={styles.firstName}>Last Name</div>
        <img className={styles.path297Icon} alt="" src="/path-297.svg" />
        <div className={styles.thomas}>Smith</div>
      </div>
      <div className={styles.label5}>
        <div className={styles.firstName}>Address Line 2</div>
        <img className={styles.path297Icon} alt="" src="/path-297.svg" />
      </div>
      <div className={styles.label6}>
        <div className={styles.firstName}>Tax Filing Status</div>
        <img className={styles.path297Icon} alt="" src="/path-297.svg" />
        <div className={styles.thomas}>Tax Filing Status</div>
      </div>
      <div className={styles.label7}>
        <div className={styles.firstName}>Spouse Has IIA Account</div>
        <img className={styles.path297Icon} alt="" src="/path-297.svg" />
        <div className={styles.thomas}>Yes</div>
      </div>
      <div className={styles.label8}>
        <div className={styles.firstName}>Email Address</div>
        <img className={styles.path297Icon} alt="" src="/path-297.svg" />
        <div className={styles.thomas}>T.smith@gvest.com</div>
      </div>
      <div className={styles.label9}>
        <div className={styles.firstName}>{`City `}</div>
        <img className={styles.path297Icon} alt="" src="/path-297.svg" />
        <div className={styles.thomas}>New York</div>
      </div>
      <div className={styles.label10}>
        <div className={styles.firstName}>Annual Pre-Tax Income</div>
        <img className={styles.path297Icon} alt="" src="/path-297.svg" />
        <div className={styles.thomas}>Annual Pre-Tax Income</div>
      </div>
      <div className={styles.label11}>
        <div className={styles.firstName}>Federal Tax Bracket</div>
        <img className={styles.path297Icon} alt="" src="/path-297.svg" />
        <div className={styles.thomas}>Federal Tax Bracket</div>
      </div>
      <div className={styles.label12}>
        <div className={styles.firstName}>Household Investable Assets</div>
        <img className={styles.path297Icon} alt="" src="/path-297.svg" />
        <div className={styles.thomas}>Household Investable Assets</div>
      </div>
      <div className={styles.label13}>
        <div className={styles.firstName}>Phone Number</div>
        <img className={styles.path297Icon} alt="" src="/path-297.svg" />
        <div className={styles.thomas}>(444) 818-2244</div>
      </div>
      <div className={styles.label14}>
        <div className={styles.firstName}>Employment Status</div>
        <img className={styles.path297Icon} alt="" src="/path-297.svg" />
        <div className={styles.thomas}>Employed</div>
      </div>
      <div className={styles.label15}>
        <div className={styles.firstName}>Employer</div>
        <img className={styles.path297Icon} alt="" src="/path-297.svg" />
        <div className={styles.thomas}>IBM</div>
      </div>
      <div className={styles.label16}>
        <div className={styles.firstName}>Occupation</div>
        <img className={styles.path297Icon} alt="" src="/path-297.svg" />
        <div className={styles.thomas}>Data Analyst</div>
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
      <div className={styles.labelParent}>
        <div className={styles.boundary}>
          <div className={styles.firstName}>Number of Dependents</div>
          <img className={styles.path297Icon} alt="" src="/path-297.svg" />
          <div className={styles.thomas}>4</div>
        </div>
        <div className={styles.iconNavigationArrowDropDow}>
          <div className={styles.boundary} />
          <img className={styles.colorIcon} alt="" src="/-color1.svg" />
        </div>
      </div>
      <div className={styles.labelGroup}>
        <div className={styles.boundary}>
          <div className={styles.firstName}>State</div>
          <img className={styles.path297Icon} alt="" src="/path-297.svg" />
          <div className={styles.thomas}>NY</div>
        </div>
        <div className={styles.iconNavigationArrowDropDow1}>
          <div className={styles.boundary} />
          <img className={styles.colorIcon} alt="" src="/-color.svg" />
        </div>
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.investorProfileChild1} />
      <div className={styles.tabButton}>
        <div className={styles.tabButtonChild} />
        <div className={styles.personalInformation}>Personal Information</div>
        <img
          className={styles.iconMaterialInfo}
          alt=""
          src="/icon-materialinfo.svg"
        />
      </div>
      <div className={styles.tabButton1} onClick={onTabButtonContainer1Click}>
        <div className={styles.tabButtonItem} />
        <div className={styles.investmentProfile}>{`Investment Profile `}</div>
        <img
          className={styles.financeChipFill0Wght400GraIcon}
          alt=""
          src="/finance-chip-fill0-wght400-grad0-opsz48-1.svg"
        />
      </div>
      <div className={styles.tabButton2} onClick={onTabButtonContainer2Click}>
        <div className={styles.tabButtonItem} />
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
          <div className={styles.label19}>
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
          <div className={styles.label19}>
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
            className={styles.chevronRightFill0Wght400GrIcon1}
            alt=""
            src="/chevron-right-fill0-wght400-grad0-opsz48.svg"
          />
          <div className={styles.label21}>
            <b className={styles.labelcontent2}>OPEN</b>
          </div>
        </div>
      </div>
      <div className={styles.navbarbgParent}>
        <img className={styles.navbarbgIcon} alt="" src="/navbarbg.svg" />
        <img className={styles.userMenuIcon} alt="" src="/user-menu.svg" />
        <div className={styles.groupParent1}>
          <img className={styles.groupChild} alt="" src="/group-330.svg" />
          <div className={styles.boundary}>
            <div className={styles.boundary}>
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
        className={styles.backArrowButton}
        alt=""
        src="/back-arrow-button.svg"
        onClick={onBackArrowButtonClick}
      />
      <div className={styles.investorProfile1}>Investor Profile</div>
      <div className={styles.navDrawerLeft}>
        <div className={styles.boundary}>
          <div className={styles.boundary}>
            <img className={styles.path428Icon} alt="" src="/path-428.svg" />
            <div className={styles.leftNavButton}>
              <div className={styles.leftNavButtonChild} />
              <div className={styles.boundary} />
              <div className={styles.leftNavButtonInner} />
              <img
                className={styles.storefrontFill1Wght400Grad0Icon}
                alt=""
                src="/storefront-fill1-wght400-grad0-opsz48.svg"
              />
            </div>
            <div className={styles.leftNavButton1}>
              <div className={styles.boundary} />
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
              <div className={styles.div3}>4</div>
            </div>
            <div className={styles.leftNavButton2}>
              <div className={styles.boundary}>
                <img
                  className={styles.iconAwesomeTasks}
                  alt=""
                  src="/icon-awesometasks.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton3}>
              <div className={styles.boundary}>
                <img
                  className={styles.manageAccountsFill0Wght400Icon}
                  alt=""
                  src="/manage-accounts-fill0-wght400-grad0-opsz48-1.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton4}>
              <div className={styles.boundary}>
                <img
                  className={styles.homeStorageFill0Wght400GraIcon}
                  alt=""
                  src="/home-storage-fill0-wght400-grad0-opsz48.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton5}>
              <div className={styles.boundary} />
              <img
                className={styles.settingsFill0Wght400Grad0OIcon}
                alt=""
                src="/settings-fill0-wght400-grad0-opsz48.svg"
              />
            </div>
            <div className={styles.leftNavButton6}>
              <div className={styles.boundary} />
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
              <div className={styles.boundary} />
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
              <div className={styles.boundary} />
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
      <img
        className={styles.component20919}
        alt=""
        src="/component-209--27.svg"
      />
    </div>
  );
};

export default InvestorProfile;
