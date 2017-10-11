<!DOCTYPE html>
<html>
    <head>
        <?= $this->Html->charset() ?>

        <title>FoknoFolies | First Edition - Redirect</title>

        <?= $this->Html->meta('description', 'Site web des FoknoFolies.'); ?>
        <?= $this->Html->meta('author', 'Arthur Fauquenot'); ?>
        <?= $this->Html->meta('viewport', 'width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1'); ?>
        <?= $this->Html->meta('icon') ?>
        
        <?=
        $this->Html->script([
            'script']);
        ?>

        <?=
        $this->Html->css([
            'bootstrap',
            'bootstrap-social',
            'login',
            'font-awesome']);
        ?>

        <?= $this->fetch('meta') ?>
        <?= $this->fetch('css') ?>
        <?= $this->fetch('script') ?>
    </head>

    <body>
        <?= $this->Flash->render() ?>

        <div>
            <?= $this->fetch('content') ?>
        </div>

        <div class="box center" id="login-box">
            <div>
                <?= $this->Html->image('logo-noir.png', ['class' => 'logo']); ?>
                <br>
                <p class="text-zone">Sauf erreur de notre part, vous ne participez pas aux FoknoFolies.</p>
                <p class="text-zone">En cas de problèmes, contactez-nous à l'adresse suivante : <a href="mailto:arthurfauquenot@yahoo.com?Subject=Contact Foknofolies">arthurfauquenot@yahoo.com</a></p>
            </div>
        </div>
    </body>
</html>