$(document).ready(function () {
  let menuChartInitialized = false;
  let trendsChartsInitialized = false;
  if ($(window).width() <= 768) {
    $('#sidebar').addClass('sidebar-closed');
  }
  function toggleSidebar() {
    const isClosed = $('#sidebar').hasClass('sidebar-closed');
    if (isClosed) {
      $('#sidebar').removeClass('sidebar-closed');
      $('.content').removeClass('content-expanded');
      $('#navbarBrandMini').addClass('d-none');
      if ($(window).width() <= 768) {
        $('#sidebarBackdrop').addClass('show');
      }
    } else {
      $('#sidebar').addClass('sidebar-closed');
      $('.content').addClass('content-expanded');
      $('#navbarBrandMini').removeClass('d-none');
      $('#sidebarBackdrop').removeClass('show');
    }
  }
  $('#sidebarToggleBtn').on('click', toggleSidebar);
  $('#sidebarBackdrop').on('click', toggleSidebar);
  $('#sidebarNav .nav-link').on('click', function (e) {
    e.preventDefault();
    $('#sidebarNav .nav-link').removeClass('active');
    $(this).addClass('active');
    const pageTitle = $(this).data('title');
    const pageId = $(this).data('page');
    $('#navbarTitle').text(pageTitle);
    $('.page-section').addClass('d-none');
    $('#' + pageId).removeClass('d-none');
    if (pageId === 'page-overview') {
      $('#refreshBtn').removeClass('d-none');
    } else {
      $('#refreshBtn').addClass('d-none');
    }
    if (pageId === 'page-menu' && !menuChartInitialized) {
      initMenuCharts();
      menuChartInitialized = true;
    }
    if (pageId === 'page-trends' && !trendsChartsInitialized) {
      initTrendsCharts();
      trendsChartsInitialized = true;
    }
    if ($(window).width() <= 768) {
      $('#sidebar').addClass('sidebar-closed');
      $('.content').addClass('content-expanded');
      $('#sidebarBackdrop').removeClass('show');
    }
  });
  $('#refreshBtn').on('click', function () {
    const newRevenue = (Math.random() * 1000 + 1200).toFixed(0);
    const newCups = Math.floor(Math.random() * 150 + 280);
    const newAOV = (newRevenue / newCups).toFixed(2);
    $('#statRevenue').text('$' + newRevenue);
    $('#statCups').text(newCups);
    $('#statAOV').text('$' + newAOV);
    $('.stat-card').addClass('flash');
    setTimeout(function () {
      $('.stat-card').removeClass('flash');
    }, 400);
  });
});