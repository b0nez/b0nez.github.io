/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function(data) {
            // YOUR CODE BELOW HERE //
            // Custom Page Stylings
            $('.heading').css('color', 'black').css('font-size', '35px');
            
            $('nav').css('font-size', '50px')
                    .css('font-style', 'italic')
                    .css('font-family', 'JosefinSans')
                    .css('text-align', 'right')
                    .css('text-outline', 'black');
                    
            $('nav').css('border-radius', '25px')
                    .css('margin-bottom', '10px')
                    .css('background-image', 'url(turntable2.gif)')
                    .css('background-position', 'center');
                    
            $('main').css('border-radius', '15px');
            $('body').css('background-color', '#7f8c8d');
            
            $('#list-top-rated').css('list-style', 'none');
            $('#section-bio p:last-child').remove();
            
            // Map List of Discography Top Rated
            let topRated = data.discography.topRated;
            let listTopRatedItems = _.map(topRated, function(recording) {
                return $('<ul>')
                    .append($('<div>')
                        .text(recording.title)
                        .addClass('title-top-rated')
                        .attr('art', recording.art));
            });
            
            // Append List of Top Rate Discography to #list-top-rated
            $('#list-top-rated')
                .append(listTopRatedItems)
                .css('padding', 5);
                
            // Top Rated Album Art Container
            $('#header-top-rated')
                .append($('<div>')
                    .attr('id', 'image-container-top-rated')
                    .attr('class', 'image-container'));
                    
            $('#image-container-top-rated')
                .append($('<img>')
                    .attr('src', 'images/album/voice-in-the-night.jpg')
                    .attr('class', 'image')
                    .attr('id', 'image-top-rated'));
                    
            // Top Rated Album Event Listener
            $('.title-top-rated').on('click', function(event) {
                let elem = $(event.currentTarget);
                $('#image-top-rated').fadeOut('fast', function() {
                    $('#image-top-rated')
                        .attr('src', $(elem).attr('art'));
                }).fadeIn('fast');
            });
            
            // Appends General Recordings Section to Sidebar
            $('#sidebar')
                .append($('<section>')
                    .attr('id', 'section-recordings'));
                    
            $('#section-recordings')
                .append($('<header>')
                    .attr('id', 'header-recordings')
                    .attr('class', 'header')
                    .text('Other Recordings')
                    .css('padding', 5)
                    .css('font-size', '25px'))
                .append($('<ul>')
                    .attr('id', 'list-recordings'));
                    
            // Map List of Discography Recordings
            var recordings = data.discography.recordings;
            let listRecordings = _.map(recordings, function(recording) {
                return $('<ul>')
                    .append($('<div>')
                        .text(recording.title)
                        .addClass('title-recordings')
                        .attr('art', recording.art));
            });
            $('#list-recordings').append(listRecordings).css('padding', 5);
            
            // Discography Images Container
            $('#header-recordings').append($('<div>').attr('id', 'image-container-recordings')
                .attr('class', 'image-container'));
            $('#image-container-recordings').append($('<img>')
                .attr('src', 'images/album/eastern-rebellion.jpg')
                .attr('class', 'image').attr('id', 'image-recordings'));
                
            // Recordings Event Listener
            $('.title-recordings').on('click', function(event) {
                let elem = $(event.currentTarget);
                $('#image-recordings').fadeOut('fast', function() {
                    $('#image-recordings').attr('src', elem.attr('art'));
                }).fadeIn('fast');
            });
            
            // More Custom CSS Stylings
            $('#image-recordings')
                .css('margin-left', '25px')
                .css('max-height', '50%')
                .css('max-width', '50%');
                
            $('#image-top-rated')
                .css('margin-left', '25px')
                .css('max-height', '50%')
                .css('max-width', '50%');
                
            $('#sidebar')
                .css('font-family', 'Lato')
                .css('text-align', 'justified');
                
            $('#header-top-rated')
                .css('font-size', '30px')
                .css('maring-top', '15px');
                
            $('#image-billy')
                .css('border-style', 'solid')
                .css('border-width', '7px')
                .css('border-radius', '25px')
                .css('border-color', '#7f8c8d');
                
            // Fade IN/OUT Random Image for Billy Higgins
            $('#image-billy').on('click', function(event) {
                
                let elem = $(event.currentTarget);
                let i = elem.attr('i');
                if (i < data.images.billy.length - 1) {
                    var src = data.images.billy[i++];
                    elem.fadeOut('fast', function() {
                        $('#image-billy')
                            .attr('src', "images/billy/billy-" + i + ".jpg")
                            .attr('i', i);
                    }).fadeIn('fast');
                }
                else {
                    elem.fadeOut('fast', function() {
                        $('#image-billy')
                            .attr('src', "images/billy/billy-0.jpg")
                            .attr('i', '0');
                    }).fadeIn('fast');
                }
            });
            
            // Creates Table for Billy's Gear
            var createTable = function(equipment) {
                var createRow = function(instrument) {
                    var $row = $("<tr>");
                    var $type = $("<td>").text(instrument.type);
                    var $desc = $("<td>").text(instrument.desc)
                        .attr('class', 'instrument-desc');
                    $row.append($type);
                    $row.append($desc);
                    return $row;
                };
                var $table = $("<table>");
                var $rows = equipment.map(createRow);
                $table.append($rows);
                return $table;
            };
            
            // Appends Table to the Sidebar
            $('#sidebar')
                .append($('<section>').attr('id', 'section-rider'));
            createTable(data.rider).appendTo('#section-rider').attr('id', 'table-rider');
            
            // Adds a Header for Table
            $('#section-rider')
                .prepend($('<header>')
                .text("Billy's Gear")
                .attr('class', 'header'));
            
            // Adds a Header for Instrument & Description
            $('#table-rider').prepend($('<th>').text('Description'));
            $('#table-rider').prepend($('<th>').text('Instrument'));
            // YOUR CODE ABOVE HERE //
        })
        .fail(function() {
            console.log('getJSON on discography failed!');
        });
});
