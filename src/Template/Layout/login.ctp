<!DOCTYPE html>
<html>
    <head>
        <?= $this->Html->charset() ?>

        <title>FoknoFolies | First Edition - Login</title>
        
        <?= $this->Html->meta('description', 'Site web des FoknoFolies.'); ?>
        <?= $this->Html->meta('author', 'Arthur Fauquenot'); ?>
        <?= $this->Html->meta('viewport', 'width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1'); ?>
        <?= $this->Html->meta('icon') ?>

        <?= $this->Html->script([
            'jquery-1.12.3', 
            'facebook']) ?>
        
        <?= $this->Html->css([
            'bootstrap', 
            'bootstrap-social', 
            'login',
            'font-awesome']); ?>
        
        <?= $this->fetch('meta') ?>
        <?= $this->fetch('css') ?>
        <?= $this->fetch('script') ?>
    </head>

    <body>
        <?= $this->Flash->render() ?>
        
        <div>
            <?= $this->fetch('content') ?>
        </div>
    </body>
</html>