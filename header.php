<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title><?= $TITLE; ?></title>
  <meta name="google-site-verification" content="rVhKmgB0idHMoWl9bGTACbKdTGuMmeZKUJEj2Dr0H5E">
  <link rel="prefetch" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <link rel="prefetch" href="/me.min.jpg">
  <link rel="icon" href="/me.min.jpg">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <link rel="stylesheet" href="/css/all.min.css">
  <link rel="stylesheet" href="/css/font-awesome.css">
  <link rel="stylesheet" href="/css/fa-pro.css">
  <link rel="stylesheet" href="/css/fontawesome.css">
  <link rel="stylesheet" href="/css/style.css">
</head>
<body>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <a href="/" class="navbar-brand">Ar's Portfolio</a>
    <button class="navbar-toggler" style="border:0" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="fal fa-bars"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item<?= isset($home) ? " active" : ""; ?>">
          <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item<?= isset($portfolio) ? " active" : ""; ?>">
          <a class="nav-link" href="/portfolio/1.html">Portfolio</a>
        </li>
      </ul>
    </div>
  </nav>