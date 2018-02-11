<?php session_start(); ?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <title>FoknoFolies | First Edition</title>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="author" content="Arthur Fauquenot">
    <meta name="description" content="Site web des FoknoFolies.">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <meta name="theme-color" content="#ffffff">

    <link rel="icon" href="./favicon.ico" type="image/x-icon">
    <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />

    <link rel="stylesheet" href="assets/css/bootstrap.css">
    <link rel="stylesheet" href="assets/css/bootstrap-social.css">
    <link rel="stylesheet" href="assets/css/font-awesome.css">
    <link rel="stylesheet" href="assets/css/main.css">
</head>

<body>
<?php 
if (!$_SESSION['FULLNAME']) { ?>
    <div class="login container-fluid flexbox">
        <div class="v-align">
            <img src="./assets/img/logo-noir.png" alt="Logo FoknoFolies" class="logo">
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
    <script src="assets/js/jquery-1.12.3.js"></script>
    <script src="assets/js/facebook.js"></script>
<?php } else { 
    if (!$_SESSION['PARTICIPANT'] || $_SESSION['PARTICIPANT'] == false) { ?>
        <div class="login container-fluid flexbox">
            <div class="v-align">
                <img src="./assets/img/logo-noir.png" alt="Logo FoknoFolies" class="logo">
                 <div class="section-content">
                    <div class="description-zone">
                        <p class="description-text">Sauf erreur de notre part, vous ne participez pas aux FoknoFolies.</p>
                        <p class="description-text">En cas de problèmes, contactez-nous à l'adresse suivante : <a href="mailto:arthurfauquenot@yahoo.com?Subject=Contact Foknofolies">arthurfauquenot@yahoo.com</a></p>
                    </div>
                </div>
            </div>
        </div>
    <?php } else { ?>
    <div class="loader"></div>

    <a href="#top" class="cd-top">Top</a>

    <section class="box-small center" id="description">
        <div class="container logo-background" id="header">
            <div class="row">
                <h1 class="title">FoknoFolies</h1>
                <p id="first-edition">First &nbsp;&nbsp;Edition</p>
                <br>
                <div id="intro" style="vertical-align: middle">
                    <p class="text-zone" style="height: 100%">
                        Les FoknoFolies est un évènement solidaire à but lucratif qui verra le jour pour la première fois en Juin prochain. Indescriptible et impromptu, il rassemblera pas moins de 150 personnalités inconnues pour répondre à l'appel.<br><br>La première édition des FoknoFolies aura lieu le samedi 18 Juin à La Boulaie, lieu emblématique des plus grands DJs solognots qui n'a d'égal que la Rue de la Soif de Marcilly-en-Villette.
                    </p>
                </div>
            </div>
        </div>
        <div class="container nav">
            <ul>
                <li><a href="#programme-link" class="nav-link">Programme</a></li>
                <li><a href="#infos-link" class="nav-link" id="infos-sub">Infos</a></li>
                <li><a href="#contact-link" class="nav-link">Contact</a></li>
            </ul>
        </div>
    </section>

    <a class="anchor" id="programme-link"></a>

    <section class="box black" id="programme">
        <div class="container section-title">
            <h1>Programme</h1>
        </div>
        <section class="flex" id="activites">
            <div class="container fadeIn">
                <div class="row">
                    <div class="col-sm-6 special-text">
                        <h2>Activites</h2>
                        <p class="fmd">Biche volley</p>
                        <p class="fsm">Pastèque</p>
                        <p class="fmd">Pétanque et crustacés</p>
                        <p class="fxl">Kro Lanta</p>
                        <p class="fxs">Courses en sac poubelle</p>
                        <p class="fmd">Beer pong</p>
                        <p class="fxl">Pêche à la ligne</p>
                        <p class="fmd">Brunch</span</p>
                        <p class="fsm">Olympiades géantes</p>
                        <p class="fmd">Flip cup</p>
                    </div>
                    <div class="col-sm-6 hidden-xs" id="line-up">
                        <h2>Line-up</h2>
                        <table>
                            <tr>
                                <th class="horaire">14h - 20h</th>
                                <td class="artist">André el Fermier</td>
                            </tr>
                            <tr>
                                <th class="horaire">20h - 21h 30</th>
                                <td class="artist">Kiécho ?</td>
                            </tr>
                            <tr>
                                <th class="horaire">21h 30 - 3h</th>
                                <td class="artist">Leplubouré</td>
                            </tr>
                            <tr>
                                <th class="horaire">3h - 6h</th>
                                <td class="artist">Daddy Thug</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    </section>

    <a class="anchor" id="infos-link"></a>

    <section id="infos" class="box">
        <div class="container section-title">
            <h1 style="text-align: right">Infos&nbsp;&nbsp;&nbsp; pratiques</h1>
        </div>
        <section id="localisation" class="flex">
            <div class="container fadeIn">
                <div class="row flex">
                    <div class="col-sm-6 hidden-xs">
                        <div id="maps"></div>
                    </div>
                    <div class="col-xs-8 col-sm-6 center" style="margin: auto">
                        <h2>Comment &nbsp;venir ?</h2>
                        <h4>La Boulaie - Marcilly-en-Villette</h4>
                        <p class="text-zone">
                            Cliquez sur le lien suivant et démarrez un itinéraire depuis votre position. Comptez un peu moins de 2h depuis le centre de Paris.
                        </p>
                        <div>
                            <a href="https://www.google.fr/maps/dir//47.7533644,1.9687087/@47.7536995,1.8992164,12z/data=!3m1!4b1!4m2!4m1!3e0" target="_blank"><button class="button button-black">Itinéraire Google Maps</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>

    <section id="formule" class="flex box black">
        <div class="container fadeIn">
            <div class="row flex">
                <div class="col-xs-8 col-sm-6 center" style="margin: auto">
                    <h2>Formule</h2>
                    <h4>Dîner + Alcool + Brunch</h4>
                    <p class="text-zone">
                        Nous nous occupons des courses et demandons une participation de 20 euros par personne (ou plus si vous avez très soif).
                    </p>
                    <div>
                        <a href="https://payname.fr/c/oq1Mgc/FoknoFolies" target="_blank"><button class="button button-white">Lien vers la cagnotte</button></a>
                    </div>
                </div>
                <div class="col-sm-6 center hidden-xs">
                    <img src="./assets/img/euro-blanc.png" alt="Euro" class="icon">
                </div>
            </div>
        </div>
    </section>

    <section id="camping" class="flex box black">
        <div class="container fadeIn">
            <div class="row flex">
                <div class="col-sm-6 center hidden-xs">
                    <img src="./assets/img/cabriolet.png" alt="Cabriolet" class="icon">
                </div>

                <div class="col-xs-8 col-sm-6 center" style="margin: auto">
                    <h2>Se &nbsp;&nbsp;&nbsp;reposer</h2>
                    <h4>Voiture ou tente ?</h4>
                    <p class="text-zone">
                        La soirée se déroule en pleine campagne avec uniquement deux petites maisons. Deux possibilités s'offrent à vous pour dormir : votre voiture (coffre ou banquette arrière au choix) ou une tente (si possible la vôtre).
                    </p>
                </div>
            </div>
        </div>
    </section>

    <a class="anchor" id="contact-link"></a>

    <section class="flex" id="contact">
        <div class="container fadeIn">
            <h1 class="center section-title">Contact</h1>
            <div class="row logo-background">
                <div class="col-sm-4 center">
                    <img src="./assets/img/camille.png" alt="Photo Camille" class="picture">
                    <p><a href="mailto:camillefauquenot@yahoo.com?Subject=Contact Foknofolies">camillefauquenot@yahoo.com</a></p>
                    <h4>06 67 95 29 42</h4>
                </div>
                <div class="col-sm-4 center">
                    <img src="./assets/img/gaspard.png" alt="Photo Gaspard" class="picture">
                    <p><a href="mailto:gaspard.fauquenot@gmail.com?Subject=Contact Foknofolies">gaspard.fauquenot@gmail.com</a></p>
                    <h4>06 42 39 15 56</h4>
                </div>
                <div class="col-sm-4 center">
                    <img src="./assets/img/arthur.png" alt="Photo Arthur" class="picture">
                    <p><a href="mailto:arthurfauquenot@yahoo.com?Subject=Contact Foknofolies">arthurfauquenot@yahoo.com</a></p>
                    <h4>06 37 17 08 87</h4>
                </div>
            </div>

            <p style="margin-top: 50px" class="center text-zone"><b>Les organisateurs se réservent le droit d'annuler en cas d'intémpéries.</b></p>
        </div>
    </section>

    <section id="footer" class="flex">
        <p>Merci de nous remercier, et faites preuve de générosité.<br>Images pas trop contractuelles.</p>
    </section>

    <script src="assets/js/jquery-1.12.3.js"></script>
    <script src="assets/js/bootstrap.js"></script>
    <script src="http://maps.googleapis.com/maps/api/js?key=AIzaSyBfBqq9AJCOsIRQ_B2iDDUWo3DPQodebFY"></script>

    <script src="assets/js/main.js"></script>
    <?php } 
    }
    ?>  
</body>
</html>