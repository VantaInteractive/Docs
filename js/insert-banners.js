var currentDate = new Date();
var bannerContainer = document.getElementById('bannerContainer');
var startDate_GameAnn = new Date(currentDate.getFullYear(), 1, 1);
var endDate_GameAnn = new Date(currentDate.getFullYear(), 1, 16);
if (
currentDate >= startDate_GameAnn && currentDate <= endDate_GameAnn) {
  var bannerGameAnnHTML = '<!-- Notice start -->\n' +
                              '<div class="notice notice-announcement project-name-logo">\n' +
                              '    <p class="notice-text monospace semibold lightgray project-jailbird project-jailbird-logo">Game announcement! Tune in on Date Day, UTC+2 @18:00 on the Vanta Interactive YouTube channel!</p>\n' +
                              '<div>\n' +
                              '<!-- Notice end -->\n';
  bannerContainer.innerHTML = bannerGameAnnHTML;
}
