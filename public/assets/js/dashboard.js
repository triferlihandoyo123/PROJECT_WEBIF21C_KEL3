function Side(){
    const navbar = document.getElementsByClassName('navbar')[0];
    const navtop = document.getElementsByClassName('navtop')[0];
    const avatar = document.getElementsByClassName('avatar-navbar')[0];
    const items = document.getElementsByClassName('items')[0];
    const toggleX = document.getElementsByClassName('close-toggle')[0];

    if(navbar.style.width=="0px" && window.innerWidth <= 750){
        toggleX.style.display = "block";
        navbar.style.position = "absolute";
        navbar.style.width="175px";
        // navtop.style.position = "relative";
        avatar.style.display="block";
        items.style.display="block";
        navbar.style.padding="20px";

        
    
    }else if(navbar.style.width=="0px" && window.innerWidth >= 750){
        /*pas mau besarin navbar*/
        navbar.style.width="175px";
        navbar.style.minWidth="175px";
        avatar.style.display="block";
        items.style.display="block";
        navbar.style.padding="20px";
    }
    else{   /*pas mau ngecilin navbar*/
        navbar.style.width="0px";
        navbar.style.minWidth="0px";
        avatar.style.display="none";
        items.style.display="none";
        navbar.style.padding="0px";
        toggleX.style.display= "none";

    }

}
function togglekecil(){
    const navbar = document.getElementsByClassName('navbar')[0];
    const navtop = document.getElementsByClassName('navtop')[0];
    const avatar = document.getElementsByClassName('avatar-navbar')[0];
    const items = document.getElementsByClassName('items')[0];
    const toggleX = document.getElementsByClassName('close-toggle')[0];

    navbar.style.width="0px";
    avatar.style.display="none";
    items.style.display="none";
    navbar.style.padding="0px";
    toggleX.style.display= "none";    
}

window.addEventListener('resize', function() {
    if (window.innerWidth > 100) { 
        const navbar = document.getElementsByClassName('navbar')[0];
        const navtop = document.getElementsByClassName('navtop')[0];
        const avatar = document.getElementsByClassName('avatar-navbar')[0];
        const items = document.getElementsByClassName('items')[0];
        const toggleX = document.getElementsByClassName('close-toggle')[0];

        navbar.style.width="0px";
        navbar.style.minWidth="0px";
        navbar.style.position = "relative";
        avatar.style.display="none";
        items.style.display="none";
        navbar.style.padding="0px";
        toggleX.style.display= "none";  
    }
})

const navItems = document.querySelectorAll('.nav-item');

navItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    if(item.getAttribute('id') == "Penjadwalan_link"){
        window.location.href = 'penjadwalan';
    }else if(item.getAttribute('id') == "Dashboard_link"){
        window.location.href = 'dashboard';
    }else if(item.getAttribute('id') == "Laporan_link"){
        window.location.href = 'laporan';
    }
    else if(item.getAttribute('id') == "Pengingat_link"){
        window.location.href = 'pengingat';
    }else if(item.getAttribute('id') == "Data_Mitra_link"){
        window.location.href = 'data_mitra';
    }else if(item.getAttribute('id') == "Sertifikat_link"){
        window.location.href = 'sertifikat';
    }
    
  });
});



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollBtn").style.display = "block";
  } else {
    document.getElementById("scrollBtn").style.display = "none";
  }
}

// Fungsi untuk scroll ke atas saat tombol diklik
function topFunction() {
  document.body.scrollTop = 0; // Untuk Safari
  document.documentElement.scrollTop = 0; // Untuk Chrome, Firefox, IE, dan Opera
}

google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawVisualization);

      function drawVisualization() {
        // Some raw data (not necessarily accurate)
        var data = google.visualization.arrayToDataTable([
          ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
          ['2004/05',  165,      938,         522,             998,           450,      614.6],
          ['2005/06',  135,      1120,        599,             1268,          288,      682],
          ['2006/07',  157,      1167,        587,             807,           397,      623],
          ['2007/08',  139,      1110,        615,             968,           215,      609.4],
          ['2008/09',  136,      691,         629,             1026,          366,      569.6]
        ]);

        var options = {
          title : 'Monthly Coffee Production by Country',
          vAxis: {title: 'Cups'},
          hAxis: {title: 'Month'},
          seriesType: 'bars',
          series: {5: {type: 'line'}}
        };

        var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }

