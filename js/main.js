
$(document).ready(function(){function y(t,n){var r=$("div.page").width();var i=$("div.page").height();var s=0;$.getJSON("https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&nojsoncallback=1",{api_key:e,photo_id:t,format:"json"}).done(function(e){var t=e.sizes.size.length-1;s=e.sizes.size[e.sizes.size.length-1].source;v=new Image;v.src=s})}function b(t,n){var r=$("div.page").width();var i=$("div.page").height();var o=0;$.getJSON("https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&nojsoncallback=1",{api_key:e,photo_id:t,format:"json"}).done(function(e){var t=e.sizes.size.length-1;o=e.sizes.size[e.sizes.size.length-1].source;if(s==false){$("div.background_overlay").animate({opacity:1},1e4,function(){$("div.background").css("background-image","url("+o+")");$("div.footer").empty();$("div.footer").append('<a href="'+e.sizes.size[t].url+'" target="_blank" class="attributes">'+e.sizes.size[t].url+"</a>");A()});$("div.background_overlay").animate({opacity:0},1e4,function(){})}else{$("div.background").css("background-image","url("+o+")");$("div.background_overlay").animate({opacity:0},2e3);$("div.footer").empty();$("div.footer").append('<a href="'+e.sizes.size[t].url+'" target="_blank" class="attributes">'+e.sizes.size[t].url+"</a>");A();s=false}})}function w(){clearTimeout(t);t=null;$("div.background_overlay").clearQueue();$("div.background_overlay").stop();$("div.background_overlay").animate({opacity:1},1e3);$("div.footer").empty();s=true;var n=$(".center .typeahead").val();if(m[n.toLowerCase()]!=1){n=u}else{u=n.toLowerCase();a=n}$.getJSON("https://api.flickr.com/services/rest/?method=flickr.photos.search&nojsoncallback=1",{api_key:e,tags:n,tagmode:"any",format:"json",safe_search:"1",is_getty:"1",page:p,extras:"owner_name, license"}).done(function(e){console.log("There are "+e.photos.photo.length+" photos");if(e.photos.photo.length==0){$(".center .typeahead").val(h[Math.floor(Math.random()*(h.length-1))]);w()}else{r=e.photos.photo.slice(0);p=e.photos.page;d=e.photos.pages;if(u==o){i=4}else{i=0}E()}})}function E(){$("div.page").dequeue();if(i<r.length){b(r[i].id,i);i+=1;if(s==false&&i<r.length){y(r[i].id,i)}if(i==1){setTimeout(function(){E()},6e3)}if(t==null&&i>=2){t=setInterval(function(){E()},2e4)}}else{p+=1;if(p>d){i=0;p=1}w()}}function S(){var e=$(".center .typeahead").val();$("div.error").clearQueue();$("div.error").queue(function(){$("div.error").empty();$("div.error").animate({opacity:0},1e3,function(){});$("div.error").dequeue()});if(m[e.toLowerCase()]==1&&u!=e.toLowerCase()){clearTimeout(n);var t=jQuery.Event("keydown",{keyCode:27});$(".center .typeahead").trigger(t);$("div.page").queue(function(){p=1;w()});return}if(u==e.toLowerCase()){var t=jQuery.Event("keydown",{keyCode:27});$(".center .typeahead").trigger(t)}}function x(){f=1;$("div.page").css("cursor","none");$("div.content").css("z-index","-100");$("div.center").css("z-index","-100");$("div.center_button").css("z-index","-100");$("div.footer").css("z-index","-100");$("div.error").css("z-index","-100");$("input.typeahead").blur()}function T(){f=0;$("div.content").css("z-index","2");$("div.center").css("z-index","2");$("div.center_button").css("z-index","1");$("div.footer").css("z-index","2");$("div.error").css("z-index","2")}function N(){$("div.page").css("cursor","default");clearTimeout(l);if(f==1){if(u!=o){$(".center .typeahead").typeahead("setQuery",a);$("div.error").empty()}$("div.content").animate({opacity:1},1e3,function(){T()})}l=setTimeout(function(){$("div.content").animate({opacity:0},1e3,function(){x()})},3e3)}function C(){if(c==1){var e=$("div.page").width();var t=$("div.page").height();$("div.stats").empty();$("div.stats").append('<p class="stats">Height:'+t+"</p>");$("div.stats").append('<p class="stats">Width:'+e+"</p>")}}function k(){$("div.stats").empty();$("div.mousestats").empty()}function L(){var e=$("div.page").width();var t=$("div.page").height();var n=t*.25;n=n+"px";var r=e/2-$("p.error").width()/2;r=r+"px";$("div.error").css("top",n);$("div.error").css("left",r)}function A(){var e=$("div.page").width();var t=$("div.page").height();C();var n=$(".center .typeahead").width();var r=$("#random_button").width();var i=$("#attributes").width();var s=t*.41;s=s+"px";var o=e/2-$("div.center").width()/2;o=o+"px";var u=t*.61;u=u+"px";var a=e/2-$("div.center_button").width()/2;a=a+"px";var f=t*.92;f=f+"px";var l=e/2-$("div.footer").width()/2;l=l+"px";var c=t*.25;c=c+"px";var h=e/2-$("div.error").width()/2;h=h+"px";$("div.center").css("top",s);$("div.center").css("left",o);$("div.center_button").css("top",u);$("div.center_button").css("left",a);$("div.footer").css("top",f);$("div.footer").css("left",l);$("div.error").css("top",c);$("div.error").css("left",h)}function O(){$("div.content").animate({opacity:1},500,function(){})}function M(){var e=$(".center .typeahead").val();if(m[e.toLowerCase()]!=1){$("div.error").empty();$("div.error").append('<p class="error"><b>Unknown city: '+e+"</b></p>");L();$("div.error").animate({opacity:1},1e3,function(){});clearTimeout(l);l=setTimeout(function(){$("div.content").animate({opacity:0},1e3,function(){x()})},6e3)}}function _(e){if(e==38){return true}else if(e==39){return true}else if(e==40){return true}return false}var e="245d1c1072c5a5a6a5288235410d377a";var t=null;var n=null;var r;var i=0;var s=true;var o="Adelaide";var u=o;var a;var f=1;var l=null;var c=0;var h=["Adelaide","Algiers","Alice Springs","Amman","Amsterdam","Anchorage","Astana","Athens","Atlanta","Atlantic City","Bali","Baltimore","Bangalore","Bangkok","Barcelona","Beijing","Beirut","Bergen","Berlin","Bern","Boston","Bremen","Brisbane","Brussels","Budapest","Buenos Aires","Cairns","Cairo","Canberra","Cannes","Cape Town","Caracas","Cartagena","Chengdu","Chicago","Chihuahua","Cinque Terre","Cologne","Colombo","Colorado Springs","Copenhagen","Damascus","Delhi","Dubai","Dublin","Dubrovnik","Edinburgh","Edmonton","Essaouira","Florence","Geneva","Gothenburg","Grahamstown","Guangzhou","Guadalajara","Hamburg","Ha Noi","Havana","Helsinki","Hilo","Ho Chi Minh","Hong Kong","Honolulu","Hyderabad","Istanbul","Jakarta","Jerusalem","Kahului","Kailua","Kaneohe","Kathmandu","Khartoum","Kotor","Kuala Lumpur","Kumasi","Lamu","Las Vegas","Lima","Lisbon","Liverpool","London","Los Angeles","Luxembourg","Luxor","Macau","Madrid","Managua","Manchester","Marrakech","Marseille","Manila","Melbourne","Memphis","Mexico City","Miami","Milan","Minsk","Montreal","Moravia","Moscow","Mumbai","Munich","Naples","New York City","Oia","Orlando","Osaka","Ottawa","Oslo","Palma de Mallorca","Paris","Penang","Perth","Philadelphia","Phnom Penh","Phoenix","Prague","Quito","Reykjavik","Rio de Janeiro","Rome","Salvador","San Francisco","San Jose","San Juan","Santa Fe","Santiago","Sao Paulo","Seattle","Seoul","Shanghai","Singapore City","Stockholm","Saint-Petersburg","Sydney","Taipei","Tangier","Tehachapi","Tehran","Tokyo","Toronto","Vancouver","Vatican City","Venice","Vienna","Voronezh","Warsaw","Washington D.C.","Wuhan","Xi'An","Zagreb","Zurich"];var p=1;var d;var v;var m={};for(var g=0;g<h.length;g++){m[h[g].toLowerCase()]=1}A();O();w();if(c==1){C()}else{k()}$(".center .typeahead").typeahead({name:"cities",local:h});$(".center .typeahead").keyup(function(e){if(_(e.which)==false){S()}});$(".center .typeahead").click(function(){S()});$(".tt-dropdown-menu").click(function(){S()});$("#random_button").click(function(){$(".center .typeahead").typeahead("setQuery",h[Math.floor(Math.random()*(h.length-1))]);$(".center .typeahead").keyup()});$("#next_image_button").click(function(){clearTimeout(t);t=null;$("div.background_overlay").clearQueue();$("div.background_overlay").stop();$("div.background_overlay").animate({opacity:1},100);$("div.background").css("background-image","");$("div.footer").empty();s=true;E()});$("div.page").click(function(){N()});$("div.page").mouseover(function(){N()});$("div.page").keyup(function(e){if(_(e.which)==false){N();var t=$(".center .typeahead").val();if(t.length>0){clearTimeout(n);n=setTimeout(function(){M()},2e3)}}});$(window).resize(function(){$("div.resizer").queue(function(){A();$("div.resizer").dequeue()})});if(c==1){$(window).mousemove(function(e){var t="( "+e.pageX+", "+e.pageY+" )";var n="( "+e.clientX+", "+e.clientY+" )";$("div.mousestats").empty();$("div.mousestats").append('<p class="stats">'+t+"</p>");$("div.mousestats").append('<p class="stats">'+n+"</p>")})}})
