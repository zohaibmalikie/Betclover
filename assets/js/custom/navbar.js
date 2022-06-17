$('#navbarAppend').prepend(`
<!--sidebar wrapper -->
<div class="sidebar-wrapper" data-simplebar="true">
    <div class="sidebar-header">
        <a href="./index.html">
            <div>
                <h5 class="logo-icon d-flex align-items-center mb-0 fw-bolder">
                    <span style="color: #db4889;">B</span>
                    <span style="color: #1d2125;">C</span>
                </h5>
            </div>
            <div>
                <img src="./assets/images/logo-img.png" class="logo-text " height="85" alt="logo icon" />
            </div>
        </a>

        <div class="toggle-icon ms-auto d-none"><i class="bx bx-arrow-to-left text-dark"></i></div>
    </div>
    <!--navigation-->
    <ul class="metismenu" id="menu">

        <li>
            <a href="./index.html">
                <div class="menu-title">Home</div>
            </a>
        </li>

        <li>
            <a href="./allPromotions.html">
                <div class="menu-title">Promotions</div>
            </a>
        </li>


        <li>
            <a href="./stacking.html">
                <div class="menu-title">Staking</div>
            </a>
        </li>

        <li>
            <a href="#">
                <div class="menu-title">Slots</div>
            </a>
        </li>


        <li>
            <a href="#">
                <div class="menu-title">Instant game</div>
            </a>
        </li>

        <li>
            <a href="./allGames.html">
                <div class="menu-title">All games</div>
            </a>
        </li>

        <li>
            <a href="./farming.html">
                <div class="menu-title">Farming</div>
            </a>
        </li>

        <li>
            <a href="./boxes.html">
                <div class="menu-title">Boxes</div>
            </a>
        </li>

        <li>
            <a href="#">
                <div class="menu-title">Bonuses</div>
            </a>
        </li>

        <li>
            <a href="./rankSystem.html">
                <div class="menu-title">Rank System</div>
            </a>
        </li>

        <li>
            <a href="./referral.html">
                <div class="menu-title">Referral</div>
            </a>
        </li>

        <li>
            <a href="#">
                <div class="menu-title">Games</div>
            </a>
        </li>

        <li>
            <a href="./sport.html">
                <div class="menu-title">Sports</div>
            </a>
        </li>

        <li>
            <a href="./news.html">
                <div class="menu-title">News</div>
            </a>
        </li>

        <li>
            <a href="#">
                <div class="menu-title">Mega Roulette</div>
            </a>
        </li>
        

        <li>
            <a href="javascript:;" class="has-arrow">
                <div class="menu-title">About</div>
            </a>
            <ul>
                <li><a href="./GMB-Token.html">GMB Token</a></li>
                <li><a href="./GMB-Team.html">Gold Mine Team</a></li>
            </ul>
        </li>
    </ul>
    <!--end navigation-->
</div>
<!--end sidebar wrapper -->
<!--start header -->
<header>
    <div class="topbar d-flex align-items-center">
        <nav class="navbar navbar-expand">
            <div class="mobile-toggle-menu"><i class="bx bx-menu"></i></div>
            <div class="mobileImageTopBar d-none text-center">
                <img src="./assets//images/logo-img.png" alt="tennis" class="w-75" />
            </div>

            <!--<div class="d-flex roundedCustomChild">
                <a href="./index.html">
                    <div class="active"><i class="bx bx-cookie"></i> Gaming</div>
                </a>
                <a href="./sport.html">
                    <div><img src="./assets/images/sidebar/tennis.png" alt="tennis" /> Sport</div>
                </a>
            </div>-->

            <div class="top-menu ms-auto">
                <ul class="navbar-nav align-items-center">
                    <li class="nav-item dropdown dropdown-large mobileDisplayNone">
                        <a class="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="./assets/images/message.png" alt="Message Image" width="30"/>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end">
                            <a href="javascript:;">
                                <div class="msg-header">
                                    <div>
                                        <span>6079</span>
                                        <select class="ms-3 bg-transparent text-white py-1 px-3 rounded">
                                            <option value="english">English</option>
                                        </select>
                                    </div>

                                    <div>
                                        <i class="bx bx-error-circle f-18"></i>
                                    </div>

                                </div>
                            </a>
                            <div class="header-message-list">
                                <a class="dropdown-item" href="javascript:;">
                                    <div class="d-flex align-items-center">
                                        <div class="user-online">
                                            <img src="https://via.placeholder.com/110x110" class="msg-avatar" alt="user avatar" />
                                        </div>
                                        <div class="flex-grow-1">
                                            <h6 class="msg-name">Johnny Seitz <span class="msg-time float-end">5 days ago</span></h6>
                                            <p class="msg-info">All the Lorem Ipsum generators</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <a href="javascript:;">
                                <div class="text-center bg-dark py-3">
                                    <a href="./login.html">
                                        <button type="button" class="btn bg-blue text-white  btn-sm" onclick="loginSignupModal('login')">Login </button>
                                    </a>
                                    <a href="./login.html">
                                        <button type="button" class="btn bg-pink text-white btn-sm" onclick="loginSignupModal('signup')">Signup</button>
                                    </a>

                                </div>
                            </a>
                        </div>
                    </li>

                    <li class="mx-2">
                        <a href="./live.html">
                            <div class="cl-blue"><img src="./assets/images/liveCasino.png" alt="casino" width="25" /> Live Casino</div>
                        </a>
                    </li>

                    <li class="me-2">
                        <a href="./login.html">
                            <button type="button" class="btn bg-blue text-white  btn-sm" onclick="loginSignupModal('login')">Login</button>
                        </a>
                    </li>
                    <li>
                        <a href="./login.html">
                            <button type="button" class="btn bg-blue text-white btn-sm"  onclick="loginSignupModal('signup')">Signup</button>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</header>
<!--end header -->

`)



$('#footer').append(`<footer class="page-footer containerMain footer">
<div class="row border__bottom pb-4  mx-0 g-4">
    <div class="col-lg-2 col-4">
        <p class="footerTitle">I-gaming</p>
        <li class="listStyleNone"><a href="./allGames.html" class="footerAnchor">All games</a></li>
        <li class="listStyleNone"><a href="#" class="footerAnchor">Dice</a></li>
        <li class="listStyleNone"><a href="#" class="footerAnchor">Slots</a></li>
        <li class="listStyleNone"><a href="./rankSystem.html" class="footerAnchor">Rank system</a></li>
    </div>
    <div class="col-lg-2 col-4">
        <p class="footerTitle">Features</p>
        <li class="listStyleNone"><a href="./stacking.html" class="footerAnchor">Staking</a></li>
        <li class="listStyleNone"><a href="./GMB-Team.html" class="footerAnchor">GolldMIne Box</a></li>
        <li class="listStyleNone"><a href="./cashback.html" class="footerAnchor">Cashback</a></li>
        <li class="listStyleNone"><a href="./dailytasks.html" class="footerAnchor">Daily tasks</a></li>
    </div>
    <div class="col-lg-1 col-4">
        <p class="footerTitle">Promo</p>
        <li class="listStyleNone"><a href="./allPromotions.html" class="footerAnchor">Promotions</a></li>
    </div>
    <div class="col-lg-2 col-4">
        <p class="footerTitle">About us</p>
        <li class="listStyleNone"><a href="./news.html" class="footerAnchor">News</a></li>
        <li class="listStyleNone"><a href="./GMB-Token.html" class="footerAnchor">About GMB</a></li>
        <li class="listStyleNone"><a href="./GMB-Team.html" class="footerAnchor">About GoldMine team</a></li>
        <li class="listStyleNone"><a href="#" class="footerAnchor">GoldMine Docs</a></li>
    </div>
    <div class="col-lg-2 col-4">
        <p class="footerTitle">Help</p>
        <li class="listStyleNone"><a href="#" class="footerAnchor">Fairness</a></li>
        <li class="listStyleNone"><a href="#" class="footerAnchor">Privacy Policy</a></li>
        <li class="listStyleNone"><a href="#" class="footerAnchor">Terms of Service</a></li>
        <li class="listStyleNone"><a href="#" class="footerAnchor">Sportsbetting T&C</a></li>
        <li class="listStyleNone"><a href="#" class="footerAnchor">Live Support</a></li>
    </div>
    <div class="col-lg-3 col-12">
        <p class="footerTitle"></p>
        <div class="d-flex">
            <div class="footer18">18+</div><img class="mx-3" src="./assets/images/footer/footer1.png" alt=""
                srcset=""><img src="./assets/images/footer/footer2.png" alt="" srcset="">
        </div>
        <p class="footer__desc text-justify pt-3">
            This website offers gaming with risk experience. To be a user of our site you must be over 18
            y.o. We are not responsible for the violation of your local laws related to i-gaming. Play
            responsibly and have fun on BetFury.
        </p>
    </div>
</div>

<div class="row justify-content-between border__bottom pb-4 pt-4 g-4">
    <a href="#" class="col-4 col-lg-1">
        <img width="101" src="./assets/images/footer/apeswap_gray@1x.avif" alt=""srcset="">
    </a>
    <a href="#" class="col-4 col-lg-1">
        <img width="101" src="./assets/images/footer/bitcoin@1x.avif" alt="" srcset="">
    </a>
    <a href="#" class="col-4 col-lg-1">
        <img width="101" src="./assets/images/footer/certik_gray@1x.avif" alt=""srcset="">
    </a>
    <a href="#" class="col-4 col-lg-1">
        <img width="101" src="./assets/images/footer/coin98_gray@1x.avif" alt=""srcset="">
    </a>
    <a href="#" class="col-4 col-lg-1">
        <img width="101" src="./assets/images/footer/coingecko_gray@1x.avif" alt=""srcset="">
    </a>
    <a href="#" class="col-4 col-lg-1">
        <img width="101" src="./assets/images/footer/cointiger_gray@1x.avif" alt=""	srcset="">
        </a>
    <a href="#" class="col-4 col-lg-1">
        <img width="101" src="./assets/images/footer/ethereum_gray@1x.avif" alt="" srcset="">
    </a>
    <a href="#" class="col-4 col-lg-1">
        <img width="101" src="./assets/images/footer/onto_gray@1x.avif" alt="" srcset="">
    </a>
</div>

<div class="row justify-content-between g-4">
    <div class="col-12 col-lg-6 social-icons-login pt-2">
        <div><i class="lni lni-app-store text-white f-13"></i></div>
        <div><i class="bx bxl-facebook-circle text-white f-13"></i></div>
        <div><i class="bx bxl-apple text-white f-13"></i></div>
        <div><i class="bx bxl-reddit text-white f-13"></i></div>
        <div><i class="bx bx-wifi text-white f-13"></i></div>
        <div><i class="bx bxl-linkedin-square text-white f-13"></i></div>
        <div><i class="bx bxl-twitter text-white f-13"></i></div>
    </div>
    <div class="col-12 col-lg-6">
        <div class="d-flex add_token_metamask">
            <img src="./assets/images/footer/bfg.178422d.svg" width="20" height="20" alt="" srcset="">
            <span class="f-9 ms-1">BFG</span>
            <span class="ms-1">→</span>
            <img class="ms-1" src="./assets/images/footer/btc.d61276e.svg" width="20" height="20" alt=""
                srcset="">
            <span class="f-9 ms-1 fw-bolder">Metamask</span>
            
        </div>
    </div>
</div>
</footer>`)






$(document).ready(function () {
    setTimeout(() => {
        $('.mm-show').removeClass('mm-show');
        $('.mm-active').removeClass('mm-active');
        $('.has-arrow').attr('aria-expanded', 'false');
    }, 1000);
})

const loginSignupModal = (which) =>{
    for(const single of $('a')){
        if($(single).attr('href') == '#pills-'+which ){
            $(single)[0].click();
        }

    }
}