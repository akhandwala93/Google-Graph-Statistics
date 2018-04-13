<script>

        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawVisualization);
        function drawVisualization() {
        // Some raw data (not necessarily accurate
        var data = google.visualization.arrayToDataTable([
        ["University Abroad", "Tuition and Fees ", "Room and Board", "vs Stony Brook University Cost**"],
        ['University College London', 4535, 6100, 12194],
        ['Peking University', 5585, 4381, 12194],
        ['Tsinghua University', 5585, 3825, 12194],
        ['HKUST (Hong kong University of Science and Technology)', 4535, 3500, 12194],
        ['Australian National University', 4535, 7000, 12194],
        ['Nanyang Technological University', 4535, 3600, 12194],
        ['University of Manchester', 4535, 5371, 12194],
        ['Chinese University of Hong kong', 4535, 1250, 12194],
        ['University of Queensland', 4535, 8400, 12194],
        ['Erasmus University Rotterdam', 4535, 5610, 12194],
        ['Seoul National University', 4535, 4000, 12194],
        ['Freie Universität Berlin', 3785 , 7950, 12194],
        ['KAIST', 4535, 4500, 12194],
        ['University of Bonn', 4535, 5000, 12194]

        ]) ;


        var options = {
        title : 'Stony Brook Cost compared to our Partners',
        trendlines: {3: {type: 'linear', lineWidth: 5, opacity: .8}},
        legend: { position: 'top', alignment: 'center', textStyle:{fontSize: 20}},
        vAxis: {title: 'Cost of Program per Semester*', titleTextStyle: {bold: 'true'}},
        hAxis: {title: 'University Abroad', slantedText: true, slantedTextAngle: 25, showTextEvery: 1, titleTextStyle: {bold: 'true'}, textStyle:{fontSize: 14}},
        seriesType: 'bars',
        interpolateNulls: true,
        series: { 2: {type: 'line', lineWidth: 7, color: '#000000'},
        1: {color: '#D52027'},
        0: {color: '#BEBEBE'}},
        animation:{
            startup: true,
            duration: 1000,
            easing: 'out'},
        isStacked:true


        };
        var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
        chart.draw(data, options);
        };


<\script>