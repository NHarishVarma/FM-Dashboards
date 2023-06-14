import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./InvestorProfile1.module.css";
const InvestorProfile1= () => {
  const navigate = useNavigate();

  const onTabButtonContainerClick = useCallback(() => {
    navigate("/investor-profile");
  }, [navigate]);

  const onTabButtonContainer1Click = useCallback(() => {
    navigate("/investor-profile-2");
  }, [navigate]);

  const onBackArrowButtonClick = useCallback(() => {
    navigate("/fund-detail-investor-relations");
  }, [navigate]);

  return (
    <div className={styles.investorProfile1}>
      <div className={styles.groupParent}>
        <div className={styles.bgParent}>
          <div className={styles.bg} />
          <div className={styles.groupContainer}>
            <div className={styles.maskGroup11Wrapper}>
              <img
                className={styles.maskGroup11}
                alt=""
                src="/mask-group-11@2x.png"
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
                src="/mask-group-11@2x.png"
              />
            </div>
            <img
              className={styles.maskGroup28}
              alt=""
              src="/mask-group-28@2x.png"
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
              src="/mask-group-11@2x.png"
            />
          </div>
          <img
            className={styles.chevronRightFill0Wght400GrIcon1}
            alt=""
            src="/chevron-right-fill0-wght400-grad0-opsz48.svg"
          />
          <div className={styles.label2}>
            <b className={styles.labelcontent2}>OPEN</b>
          </div>
        </div>
      </div>
      <div className={styles.investorProfile1Child} />
      <div className={styles.investorProfile1Item} />
      <div className={styles.investorProfile1Inner} />
      <div className={styles.tabButton} onClick={onTabButtonContainerClick}>
        <div className={styles.tabButtonChild} />
        <div className={styles.personalInformation}>Personal Information</div>
        <img
          className={styles.iconMaterialInfoOutline}
          alt=""
          src="/icon-materialinfooutline.svg"
        />
      </div>
      <div className={styles.tabButton1} onClick={onTabButtonContainer1Click}>
        <div className={styles.tabButtonChild} />
        <div className={styles.investmentProfile}>{`Investment Profile `}</div>
        <img
          className={styles.financeChipFill0Wght400GraIcon}
          alt=""
          src="/finance-chip-fill0-wght400-grad0-opsz48-1.svg"
        />
      </div>
      <div className={styles.tabButton2}>
        <div className={styles.tabButtonInner} />
        <div className={styles.bankingInformation}>Banking Information</div>
        <img
          className={styles.accountBalanceFill1Wght400Icon}
          alt=""
          src="/account-balance-fill1-wght400-grad0-opsz48.svg"
        />
      </div>
      <div className={styles.navbarbgParent}>
        <img className={styles.navbarbgIcon} alt="" src="/navbarbg.svg" />
        <img className={styles.userMenuIcon} alt="" src="/user-menu.svg" />
        <div className={styles.groupParent1}>
          <img className={styles.groupChild} alt="" src="/group-330.svg" />
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
            <img className={styles.path428Icon} alt="" src="/path-428.svg" />
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
                className={styles.notificationsFill0Wght400GrIcon}
                alt=""
                src="/notifications-fill0-wght400-grad0-opsz48.svg"
              />
              <img
                className={styles.leftNavButtonInner}
                alt=""
                src="/ellipse-58.svg"
              />
              <div className={styles.div}>4</div>
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
              <div className={styles.groupWrapper} />
              <img
                className={styles.homeFill0Wght300Grad0Opsz4Icon}
                alt=""
                src="/home-fill0-wght300-grad0-opsz40.svg"
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
        className={styles.backArrowButton}
        alt=""
        src="/back-arrow-button.svg"
        onClick={onBackArrowButtonClick}
      />
      <div className={styles.investorProfile}>Investor Profile</div>
      <div className={styles.label3}>
        <div className={styles.branchLocation}>Branch Location​</div>
        <img className={styles.path297Icon} alt="" src="/path-297.svg" />
        <div className={styles.firstAve}>Branch Location​</div>
      </div>
      <div className={styles.label4}>
        <div className={styles.branchLocation}>Address Line 2</div>
        <img className={styles.path297Icon} alt="" src="/path-297.svg" />
      </div>
      <div className={styles.label5}>
        <div className={styles.branchLocation}>Account No.​</div>
        <img className={styles.path297Icon} alt="" src="/path-297.svg" />
        <div className={styles.firstAve}>Account No.​</div>
      </div>
      <div className={styles.label6}>
        <div className={styles.branchLocation}>Bank Name​</div>
        <img className={styles.path297Icon} alt="" src="/path-297.svg" />
        <div className={styles.firstAve}>Bank Name​</div>
      </div>
      <div className={styles.label7}>
        <div className={styles.branchLocation}>Address Line 1</div>
        <img className={styles.path297Icon} alt="" src="/path-297.svg" />
        <div className={styles.firstAve}>{`1234 First Ave. `}</div>
      </div>
      <div className={styles.label8}>
        <div className={styles.branchLocation}>{`City `}</div>
        <img className={styles.path297Icon} alt="" src="/path-297.svg" />
        <div className={styles.firstAve}>New York</div>
      </div>
      <div className={styles.labelParent}>
        <div className={styles.groupWrapper}>
          <div className={styles.branchLocation}>State</div>
          <img className={styles.path297Icon} alt="" src="/path-297.svg" />
          <div className={styles.firstAve}>NY</div>
        </div>
        <div className={styles.iconNavigationArrowDropDow}>
          <div className={styles.groupWrapper} />
          <img className={styles.colorIcon} alt="" src="/-color.svg" />
        </div>
      </div>
      <div className={styles.label10}>
        <div className={styles.branchLocation}>Zip Code</div>
        <img className={styles.path297Icon} alt="" src="/path-297.svg" />
        <div className={styles.firstAve}>98765</div>
      </div>
      <div className={styles.lineDiv} />
      <div className={styles.investorProfile1Child1} />
      <img className={styles.avatarIcon} alt="" src="/avatar@2x.png" />
      <div className={styles.label11}>
        <div className={styles.branchLocation}>First Name</div>
        <img className={styles.path297Icon} alt="" src="/path-297.svg" />
        <div className={styles.firstAve}>Thomas</div>
      </div>
      <div className={styles.label12}>
        <div className={styles.branchLocation}>Last Name</div>
        <img className={styles.path297Icon} alt="" src="/path-297.svg" />
        <div className={styles.firstAve}>Smith</div>
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
      <img
        className={styles.component20920}
        alt=""
        src="/component-209--27.svg"
      />
    </div>
  );
};

export default InvestorProfile1;
