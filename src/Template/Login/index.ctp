<div class="box center" id="login-box">
    <div>
        <?= $this->Html->image('logo-noir.png', ['class' => 'logo']); ?>
        <br>
        <a class="btn btn-social btn-facebook facebookConnect socialButton" 
           href="<?= $this->url->build(['action' => 'fblogin']) ?>">
            <span class="fa fa-facebook"></span> Sign in with Facebook
        </a>
        <br>
        <p class="text-zone">Seuls les participants aux FoknoFolies ont accès au site web de l'évènement.<br>Connectez vous avec Facebook pour
            une simple vérification.</p>
    </div>
</div>

