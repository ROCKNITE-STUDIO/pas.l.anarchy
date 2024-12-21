<script>
  // Fonction pour détecter les appareils mobiles
  function isMobileDevice() {
    return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  // Redirection si l'utilisateur est sur un appareil mobile
  if (isMobileDevice()) {
    window.location.href = "https://rocknite-studio.github.io/pas.l.anarchy/mobile"; // Remplacez par l'URL cible
  }
</script>
