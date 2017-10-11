<?php session_start(); ?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <title>FoknoFolies | Édition #2 | 8 - 9 Juillet 2017</title>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="author" content="Arthur Fauquenot">
    <meta name="description" content="Site web de la deuxième édition des FoknoFolies.  Retrouvez ici toutes les informations sur cette édtion : programme, itinéraire, gallerie, contact...">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <meta name="theme-color" content="#ffffff">

    <link rel="icon" href="./favicon.ico" type="image/x-icon">
    <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" href="css/vendor.min.css">
    <link rel="stylesheet" href="css/main.min.css">
</head>

<body>
<?php 
if (!$_SESSION['FULLNAME']) { ?>
    <div class="container-fluid flexbox">
        <div class="v-align">
            <img src="./images/logo-foknofolies.jpg" alt="Logo FoknoFolies" class="logo">
            <a class="btn btn-social btn-facebook socialButton" id="facebookConnect" href="login.php">
                <span class="fa fa-facebook"></span> Se connecter avec Facebook
            </a>
            <div class="section-content">
                <div class="description-zone">
                    <p class="description-text">Seuls les participants aux FoknoFolies ont accès au site web de l'évènement. Connectez vous avec Facebook pour une simple vérification.</p>
                </div>
            </div>
        </div>
    </div>
    <script src="js/facebook.min.js"></script>
<?php } else { 
    if (!$_SESSION['PARTICIPANT'] || $_SESSION['PARTICIPANT'] == false) { ?>
        <div class="container-fluid flexbox">
            <div class="v-align">
                <img src="./images/logo-foknofolies.jpg" alt="Logo FoknoFolies" class="logo">
                 <div class="section-content">
                    <div class="description-zone">
                        <p class="description-text">Sauf erreur de notre part, vous ne participez pas aux FoknoFolies.</p>
                        <p class="description-text">En cas de problèmes, contactez-nous à l'adresse suivante : <a href="mailto:arthurfauquenot@yahoo.com?Subject=Contact Foknofolies">arthurfauquenot@yahoo.com</a></p>
                    </div>
                </div>
            </div>
        </div>
    <?php 
    }
    else { 
    ?>
    <div id="loading-icon"></div>

    <div id="logo-animation">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2792.98 1938.1" width="100%" height="80%" id="svg-logo-foknofolies">
            <g id="svg-logo-texte">
                <path d="M1040.83,1191.29v-71a144,144,0,0,0-288,0v144a143.92,143.92,0,0,0,144,144v-72a72,72,0,0,1-72-72v-144a72,72,0,0,1,144,0v71Z" transform="translate(-90.79 -492.71)" />
                <path d="M968.83,1263.29c0,40.35-32.2,73-72,73" transform="translate(-90.79 -492.71)" />
                <path d="M1040.83,1263.29c0,80.15-64.41,145-144,145" transform="translate(-90.79 -492.71)" />
                <line x1="878.04" y1="698.58" x2="878.04" y2="770.58" />
                <line x1="950.04" y1="698.58" x2="950.04" y2="770.58" />
                <polyline points="1265.04 554.58 1310.04 599.58 1130.04 770.58 1265.04 896.58 1265.04 986.58 1094.04 824.58 1094.04 986.58 1022.04 986.58 1022.04 662.58 1094.04 662.58 1094.04 716.58 1262.82 552.3" />
                <line x1="1022.04" y1="554.58" x2="1022.04" y2="662.58" />
                <line x1="1094.04" y1="554.58" x2="1022.04" y2="554.58" />
                <line x1="1094.04" y1="662.58" x2="1094.04" y2="554.58" />
                <polygon points="1454.04 660.3 1598.04 372.3 1670.04 372.3 1670.04 804.3 1598.04 804.3 1598.04 516.3 1454.04 804.3 1382.04 804.3 1382.04 372.3 1454.04 372.3 1454.04 660.3" />
                <path d="M1832.83,1262v71a144,144,0,0,0,288,0V1189a143.92,143.92,0,0,0-144-144v72a72,72,0,0,1,72,72v144a72,72,0,0,1-144,0v-71Z" transform="translate(-90.79 -492.71)" />
                <path d="M1904.83,1190c0-40.35,32.2-73,72-73" transform="translate(-90.79 -492.71)" />
                <path d="M1832.83,1190c0-80.15,64.41-145,144-145" transform="translate(-90.79 -492.71)" />
                <line x1="1814.04" y1="769.3" x2="1814.04" y2="697.3" />
                <line x1="1742.04" y1="769.3" x2="1742.04" y2="697.3" />
                <path d="M743.83,1838v71a144,144,0,0,0,288,0V1765a143.92,143.92,0,0,0-144-144v72a72,72,0,0,1,72,72v144a72,72,0,0,1-144,0v-71Z" transform="translate(-90.79 -492.71)" />
                <path d="M815.83,1766c0-40.35,32.2-73,72-73" transform="translate(-90.79 -492.71)" />
                <path d="M743.83,1766c0-80.15,64.41-145,144-145" transform="translate(-90.79 -492.71)" />
                <line x1="725.04" y1="1345.3" x2="725.04" y2="1273.3" />
                <line x1="653.04" y1="1345.3" x2="653.04" y2="1273.3" />
                <polyline points="1094.04 912.3 1022.04 912.3 1022.04 914.58 1022.04 1488.3 1166.04 1488.3 1166.04 1416.3 1094.04 1416.3 1094.04 914.58" />
                <line x1="1310.04" y1="1416.3" x2="1166.04" y2="1416.3" />
                <line x1="1310.04" y1="1488.3" x2="1166.04" y2="1488.3" />
                <line x1="1310.04" y1="1416.3" x2="1310.04" y2="1488.3" />
                <line x1="1382.04" y1="1452.3" x2="1382.04" y2="1164.3" />
                <line x1="1454.04" y1="1164.3" x2="1382.04" y2="1164.3" />
                <line x1="1454.04" y1="1452.3" x2="1454.04" y2="1164.3" />
                <line x1="1382.04" y1="1452.3" x2="1454.04" y2="1452.3" />
                <rect x="1382.04" y="984.3" width="72" height="144" />
                <polygon points="1814.04 1560.3 1598.04 1560.3 1598.04 1272.3 1814.04 1272.3 1814.04 1200.3 1526.04 1200.3 1526.04 1632.3 1814.04 1632.3 1814.04 1560.3" />
                <line x1="1598.04" y1="1380.3" x2="1706.04" y2="1380.3" />
                <line x1="1706.04" y1="1452.3" x2="1706.04" y2="1380.3" />
                <line x1="1598.04" y1="1452.3" x2="1706.04" y2="1452.3" />
                <line x1="1598.04" y1="1380.3" x2="1598.04" y2="1452.3" />
                <path d="M2192.83,1927c0,29.85-32.2,54-72,54" transform="translate(-90.79 -492.71)" />
                <path d="M2192.83,1927c0-29.85-32.2-54-72-54" transform="translate(-90.79 -492.71)" />
                <path d="M2264.83,1927c0-69.64-64.41-126-144-126" transform="translate(-90.79 -492.71)" />
                <path d="M2264.83,1927c0,69.64-64.41,126-144,126" transform="translate(-90.79 -492.71)" />
                <path d="M2048.83,1927c0,29.85,32.2,54,72,54" transform="translate(-90.79 -492.71)" />
                <path d="M1967.83,1927c0,69.64,68.43,126,153,126" transform="translate(-90.79 -492.71)" />
                <line x1="1877.04" y1="1434.3" x2="1958.04" y2="1434.3" />
                <path d="M2192.83,1747c0-29.85-32.2-54-72-54s-72,24.15-72,54,32.2,54,72,54v72c-79.59,0-144-56.36-144-126s64.41-126,144-126,144,56.36,144,126Z" transform="translate(-90.79 -492.71)" />
                <polygon points="446.04 336.3 950.04 336.3 950.04 408.3 518.04 408.3 518.04 1560.3 446.04 1560.3 446.04 336.3" />
                <line x1="518.04" y1="912.3" x2="662.04" y2="912.3" />
                <line x1="662.04" y1="984.3" x2="662.04" y2="912.3" />
                <line x1="518.04" y1="984.3" x2="662.04" y2="984.3" />
            </g>
            <g id="svg-logo-trace">
                <line x1="1.15" y1="1126.47" x2="1087.97" y2="1.49" />
                <line x1="1087.97" y1="1.49" x2="2341.27" y2="1203.39" />
                <line x1="503.35" y1="1721.33" x2="2341.27" y2="1203.39" />
                <line x1="1.15" y1="1126.47" x2="503.35" y2="1721.33" />
                <line x1="1.15" y1="1126.47" x2="2029.44" y2="1936.71" />
                <line x1="1.15" y1="1126.47" x2="2008.08" y2="115.45" />
                <line x1="2029.44" y1="1936.71" x2="2008.08" y2="115.45" />
                <line x1="1087.97" y1="1.49" x2="2008.08" y2="115.45" />
                <line x1="2341.27" y1="1203.39" x2="2008.08" y2="115.45" />
            </g>
            <g id="svg-logo-editionNb">
                <path d="M2509.58,1591.39l11.93-73.82h-29.83v-45.49h35.79l6.34-29.45h-30.2v-45.11H2539l12.68-72.7h39.89l-11.56,72.7h24.61l11.56-72.7H2658l-11.93,72.7h29.83v45.11h-35.42l-7.08,29.45h30.2v45.49h-35.42l-12.68,73.82h-39.52l11.19-73.82h-25l-11.93,73.82Zm83.14-119.31,6.34-29.45h-25l-6.34,29.45Z" transform="translate(-90.79 -492.71)" />
                <path d="M2727.49,1591.39h-36.76v-45l96.11-140.68q6.16-9,12.42-19.41a193.42,193.42,0,0,0,11.19-21.46,154.69,154.69,0,0,0,8-22.49,87.42,87.42,0,0,0,3.08-22.9,77.88,77.88,0,0,0-1.54-15.3,57.55,57.55,0,0,0-4.72-14.17,36.38,36.38,0,0,0-8.32-11.09,24.1,24.1,0,0,0-12.32-5.85v-54.42q21.77.82,38.4,8.32A79.74,79.74,0,0,1,2861,1247.5a87.15,87.15,0,0,1,17,31.32,135.16,135.16,0,0,1,5.75,40.66,126.65,126.65,0,0,1-3.49,29.57,185.6,185.6,0,0,1-9.34,28.55,218.34,218.34,0,0,1-13.66,27.11q-7.81,13.14-16.43,25.26-6,9.24-14.38,21.77t-17.35,25.67q-8.93,13.15-17.25,25.26t-14.07,20.54Zm57.09-318.32a23.5,23.5,0,0,0-12.32,5.75,36.32,36.32,0,0,0-8.11,11.09,62,62,0,0,0-4.83,14.48,124.83,124.83,0,0,0-2.26,16q-.62,8.11-.72,15.92t-.1,13.76h-62V1331a185.87,185.87,0,0,1,4.93-44.05q4.93-20.23,15.71-35.12a76.78,76.78,0,0,1,28-23.62q17.25-8.73,41.69-9.55Zm.62,257.53h97.55v60.79H2740.43Z" transform="translate(-90.79 -492.71)" />
            </g>
        </svg>
        <a href="#" id="skip">Passer l'animation</a>
    </div>

    <div id="full-page">
        <div class="section" id="accueil-section" data-anchor="accueil">
            <img data-src="./images/background-reverse-small.png" data-srcset="./images/background-reverse-big.png 1100w" alt="Background Image" class="background-image animated">
            <div class="container-fluid flexbox">
                <img src="./images/logo-foknofolies-trace.png" alt="Logo FoknoFolies Tracé">
                <div class="section-content h-align">
                    <div class="info-box">
                        <p>8 - 9</p>
                        <p>Juillet</p>
                        <p>2017</p>
                    </div>
                    <div>
                        <h1>FoknoFolies</h1>
                        <h2>Édition #2</h2>
                    </div>
                    <div class="info-box">
                        <p>J - <span id="remaining-days">0</span></p>
                    </div>
                </div>
            </div>
            <div class="scroll-button"><span></span><span></span><span></span></div>
        </div>

        <div class="section" id="itineraire-section" data-anchor="itineraire">
            <div class="container-fluid flexbox">
                <div class="section-content v-align animated">
                    <h2>Itinéraire</h2>
                    <div id="maps-loading">
                        <div id="maps"></div>
                    </div>
                    <div class="description-zone">
                        <p class="description-text">Cliquez sur Go pour lancer un itinéraire depuis la position de votre choix. </p>
                    </div>
                    <a href="https://www.google.fr/maps/dir//47.75323,1.968723/@47.7522661,1.9340387,13z/data=!3m1!4b1!4m2!4m1!3e0" target="_blank" id="go-button">Go</a>
                </div>
            </div>
        </div>

        <div class="section" id="programme-section" data-anchor="programme">
            <div class="container-fluid flexbox">
                <div class="section-content">
                    <h2>Programme</h2>
                    <div class="slide description-zone fp-auto-height" data-anchor="programme-samedi-aprem">
                        <img src="./images/icons/target.svg" alt="Target Icon" class="description-icon">
                        <hr class="fadeRight">
                        <p class="description-title">Samedi après-midi</p>
                        <hr class="fadeLeft">
                        <p class="description-text">Un grand nombre d'activités ludiques sont prévues pour vous divertir : Kro Lanta, Pétanque, Molkky, 24h KroNo, Poule Renard Vipère, Badminton, Chifoubaffes... Un tournoi de Beer Pong débutera en fin d'après midi et rassemblera
                            les joueurs les plus expérimentés de La Boulaie.</p>
                    </div>
                    <div class="slide description-zone fp-auto-height" data-anchor="programme-samedi-soir">
                        <img src="./images/icons/rocket.svg" alt="Doughnut Icon" class="description-icon">
                        <hr class="fadeRight">
                        <p class="description-title">Samedi soir</p>
                        <hr class="fadeLeft">
                        <p class="description-text">Aucune corne de brume ne sonnera la fin de l'apéro, libre à vous donc de rejoindre le dancefloor le plus réputé de la région quand bon vous semble. Quelques artistes feront peut-être leur apparition sur scène pour vous enjailler,
                            mais c'est peu probable.</p>
                        <div class="hidden-xs">

                        </div>
                    </div>
                    <div class="slide description-zone fp-auto-height" data-anchor="programme-musical">
                        <img src="./images/icons/levels.svg" alt="Doughnut Icon" class="description-icon">
                        <hr class="fadeRight">
                        <p class="description-title">Programme musical</p>
                        <hr class="fadeLeft">
                        <p class="description-text visible-xs">Pour bien préparer cette soirée, voici une playlist dite "collaborative" où vous pouvez ajouter vos tubes préférés :<br> <a href="https://open.spotify.com/user/117752901/playlist/5kLzwZLJpX8QizZP5ppe70" style="text-decoration: underline; word-break: break-all">https://open.spotify.com/user/117752901/playlist/5kLzwZLJpX8QizZP5ppe70</a></p>
                        <iframe class="playlist hidden-xs" src="https://open.spotify.com/embed/user/117752901/playlist/5kLzwZLJpX8QizZP5ppe70" width="300" frameborder="0" allowtransparency="true"></iframe>
                    </div>
                    <div class="slide description-zone fp-auto-height" data-anchor="programme-dimanche">
                        <img src="./images/icons/doughnut.svg" alt="Doughnut Icon" class="description-icon">
                        <hr class="fadeRight">
                        <p class="description-title">Dimanche</p>
                        <hr class="fadeLeft">
                        <p class="description-text">Pour vous remettre de vos émotions et bien entamer cette belle gueule de bois, un "brunch" (les hipsters vous expliqueront ce que c'est) est prévu. Les FoknoFolies ne se terminant jamais pour de bon, vous pourrez profiter du soleil
                            ou de la pluie jusqu'à la fin de la journée. </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="section" id="cagnotte-section" data-anchor="cagnotte">
            <div class="container-fluid flexbox">
                <div class="section-content">
                    <h2>Cagnotte</h2>
                    <h4>Lien à venir</h4>
                </div>
            </div>
        </div>

        <div class="section" id="gallerie-section" data-anchor="gallerie">
            <div class="container-fluid flexbox">
                <div class="section-content">
                    <h2>Gallerie</h2>
                    <p class="sub-title">Aperçu de la première édition...</p>
                    <div class="owl-container">
                        <div class="owl-carousel">
                            <img class="owl-lazy" data-src="./images/gallerie/image-1-min.jpg" alt="Slide image - House">
                            <img class="owl-lazy" data-src="./images/gallerie/image-2-min.jpg" alt="Slide image - House">
                            <img class="owl-lazy" data-src="./images/gallerie/image-3-min.jpg" alt="Slide image - House">
                            <img class="owl-lazy" data-src="./images/gallerie/image-4-min.jpg" alt="Slide image - House">
                            <img class="owl-lazy" data-src="./images/gallerie/image-5-min.jpg" alt="Slide image - House">
                            <img class="owl-lazy" data-src="./images/gallerie/image-6-min.jpg" alt="Slide image - House">
                            <img class="owl-lazy" data-src="./images/gallerie/image-7-min.jpg" alt="Slide image - House">
                            <img class="owl-lazy" data-src="./images/gallerie/image-8-min.jpg" alt="Slide image - House">
                            <img class="owl-lazy" data-src="./images/gallerie/image-9-min.jpg" alt="Slide image - House">
                            <img class="owl-lazy" data-src="./images/gallerie/image-10-min.jpg" alt="Slide image - House">
                            <img class="owl-lazy" data-src="./images/gallerie/image-11-min.jpg" alt="Slide image - House">
                            <img class="owl-lazy" data-src="./images/gallerie/image-12-min.jpg" alt="Slide image - House">
                            <img class="owl-lazy" data-src="./images/gallerie/image-13-min.jpg" alt="Slide image - House">
                            <img class="owl-lazy" data-src="./images/gallerie/image-14-min.jpg" alt="Slide image - House">
                            <img class="owl-lazy" data-src="./images/gallerie/image-15-min.jpg" alt="Slide image - House">
                            <img class="owl-lazy" data-src="./images/gallerie/image-16-min.jpg" alt="Slide image - House">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="section" id="contact-section" data-anchor="contact">
            <img data-src="./images/background-small.png" data-srcset="./images/background-big.png 1100w" alt="Background Image" class="background-image animated">
            <div class="container-fluid flexbox">
                <div class="section-content">
                    <h2>Contact</h2>
                    <div class="contact-zone">
                        <div class="description-zone">
                            <img src="./images/camille.jpg" alt="Photo Camille" class="description-photo">
                            <div class="description-content">
                                <p class="description-title">Camille Fauquenot</p>
                                <a href="tel:06 67 95 29 42" class="description-text">06 67 95 29 42</a>
                            </div>
                        </div>
                        <div class="description-zone">
                            <img src="./images/gaspard.jpg" alt="Photo Gaspard" class="description-photo">
                            <div class="description-content">
                                <p class="description-title">Gaspard Fauquenot</p>
                                <a href="tel:06 42 39 15 56" class="description-text">06 42 39 15 56</a>
                            </div>
                        </div>
                        <div class="description-zone">
                            <img src="./images/arthur.jpg" alt="Photo Arthur" class="description-photo">
                            <div class="description-content">
                                <p class="description-title">Arthur Fauquenot</p>
                                <a href="tel:06 37 17 08 87" class="description-text">06 37 17 08 87</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="logo-line">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2350 1950">
            <line x1="1.15" y1="1126.47" x2="1087.97" y2="1.49" />
            <line x1="1087.97" y1="1.49" x2="2341.27" y2="1203.39" />
            <line x1="503.35" y1="1721.33" x2="2341.27" y2="1203.39" />
            <line x1="1.15" y1="1126.47" x2="503.35" y2="1721.33" />
            <line x1="1.15" y1="1126.47" x2="2029.44" y2="1936.71" />
            <line x1="1.15" y1="1126.47" x2="2008.08" y2="115.45" />
            <line x1="2029.44" y1="1936.71" x2="2008.08" y2="115.45" />
            <line x1="1087.97" y1="1.49" x2="2008.08" y2="115.45" />
            <line x1="2341.27" y1="1203.39" x2="2008.08" y2="115.45" />
        </svg>
    </div>

    <ul id="v-nav">
        <li class="nav-link" data-menuanchor="accueil"><a href='#accueil'>Accueil</a></li>
        <li class="nav-link" data-menuanchor="itineraire"><a href='#itineraire'>Itinéraire</a></li>
        <li class="nav-link" data-menuanchor="programme"><a href='#programme'>Programme</a></li>
        <li class="nav-link" data-menuanchor="cagnotte"><a href='#cagnotte'>Cagnotte</a></li>
        <li class="nav-link" data-menuanchor="gallerie"><a href='#gallerie'>Gallerie</a></li>
        <li class="nav-link" data-menuanchor="contact"><a href='#contact'>Contact</a></li>
    </ul>

    <script src="js/vendor.min.js"></script>
    <script src="js/main.min.js"></script>
    <script src="http://maps.googleapis.com/maps/api/js?key=AIzaSyBfBqq9AJCOsIRQ_B2iDDUWo3DPQodebFY"></script>
    <?php } 
    }
    ?>  
</body>
</html>