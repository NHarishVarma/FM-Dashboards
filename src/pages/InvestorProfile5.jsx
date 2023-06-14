import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./InvestorProfile5.module.css";
const InvestorProfile5= () => {
  const navigate = useNavigate();

  const onTabButtonContainerClick = useCallback(() => {
    navigate("/investor-profile-6");
  }, [navigate]);

  const onTabNavButtonClick = useCallback(() => {
    navigate("/investor-profile-3");
  }, [navigate]);

  const onTabButtonContainer2Click = useCallback(() => {
    navigate("/investor-profile-4");
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
    <div className={styles.investorProfile5}>
      <div className={styles.labelParent}>
        <div className={styles.label}>
          <div className={styles.branchLocation}>Branch Location​</div>
          <img className={styles.path297Icon} alt="" src="/path-297.svg" />
          <div className={styles.firstAve}>Branch Location​</div>
        </div>
        <div className={styles.label1}>
          <div className={styles.branchLocation}>Address Line 2</div>
          <img className={styles.path297Icon} alt="" src="/path-297.svg" />
        </div>
        <div className={styles.label2}>
          <div className={styles.branchLocation}>Account No.​</div>
          <img className={styles.path297Icon} alt="" src="/path-297.svg" />
          <div className={styles.firstAve}>Account No.​</div>
        </div>
        <div className={styles.label3}>
          <div className={styles.branchLocation}>Bank Name​</div>
          <img className={styles.path297Icon} alt="" src="/path-297.svg" />
          <div className={styles.firstAve}>Bank Name​</div>
        </div>
        <div className={styles.label4}>
          <div className={styles.branchLocation}>Address Line 1</div>
          <img className={styles.path297Icon} alt="" src="/path-297.svg" />
          <div className={styles.firstAve}>{`1234 First Ave. `}</div>
        </div>
        <div className={styles.label5}>
          <div className={styles.branchLocation}>{`City `}</div>
          <img className={styles.path297Icon} alt="" src="/path-297.svg" />
          <div className={styles.firstAve}>New York</div>
        </div>
        <div className={styles.labelGroup}>
          <div className={styles.boundary}>
            <div className={styles.branchLocation}>State</div>
            <img className={styles.path297Icon} alt="" src="/path-297.svg" />
            <div className={styles.firstAve}>NY</div>
          </div>
          <div className={styles.iconNavigationArrowDropDow}>
            <div className={styles.boundary} />
            <img className={styles.colorIcon} alt="" src="/-color.svg" />
          </div>
        </div>
        <div className={styles.label7}>
          <div className={styles.branchLocation}>Zip Code</div>
          <img className={styles.path297Icon} alt="" src="/path-297.svg" />
          <div className={styles.firstAve}>98765</div>
        </div>
        <div className={styles.groupChild} />
      </div>
      <div className={styles.investorProfile5Child} />
      <div className={styles.investorProfile5Item} />
      <div className={styles.tabButton} onClick={onTabButtonContainerClick}>
        <div className={styles.tabButtonChild} />
        <div className={styles.investmentProfile}>{`Investment Profile `}</div>
        <img
          className={styles.financeChipFill0Wght400GraIcon}
          alt=""
          src="/finance-chip-fill0-wght400-grad0-opsz48-1.svg"
        />
      </div>
      <div className={styles.tabButton1}>
        <div className={styles.tabButtonItem} />
        <div className={styles.bankingInformation}>Banking Information</div>
        <img
          className={styles.accountBalanceFill1Wght400Icon}
          alt=""
          src="/account-balance-fill1-wght400-grad0-opsz48.svg"
        />
      </div>
      <div className={styles.tabNavButton} onClick={onTabNavButtonClick}>
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
      <div className={styles.investorProfile5Inner}>
        <div className={styles.boundary}>
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
            <div className={styles.vintage2023}>Vintage: 2023</div>
          </div>
        </div>
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.groupDiv}>
        <div className={styles.boundary}>
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
              <div className={styles.div1}>4</div>
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
                className={styles.chevronRightFill0Wght400GrIcon}
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
        <div className={styles.groupParent}>
          <img className={styles.groupItem} alt="" src="/group-330.svg" />
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
        className={styles.component20942}
        alt=""
        src="/component-209--27.svg"
      />
    </div>
  );
};

export default InvestorProfile5;
