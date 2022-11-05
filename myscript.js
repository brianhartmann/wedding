import * as cheerio from 'cheerio';


const $ = cheerio.load('<ul id="fruits">...</ul>');

$.html();
//=> <html><head></head><body><ul id="fruits">...</ul></body></html>

card = '<div class="w-5/12 md:w-1/2 lg:w-full max-w-xs bg-white rounded-lg shadow-md mb-3">' +
'<img class="w-fit" src="https://m.media-amazon.com/images/I/51SmSK5NmhS._SR500,500_US0_.jpg" alt="Sunset in the mountains">'+
'<div class="px-6 py-4">'+
  '<div class="font-sans text-sm md:text-md mb-2 truncate">VIZIO V-Series 5.1 Home Theater Sound Bar with Dolby Audio...</div>'+
  '<div class="font-bold text-lg">$199.99</div>'+
'</div>'+
'<div class="px-6 pt-4 pb-2">'+
  '<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Needs 1 of 1</span>'+
'</div>'+
'</div>'



    const req = http.request('https://www.amazon.com/wedding/organize-registry?ref_=wedding_subnav', res => {
	const data = [];

	res.on('data', _ => data.push(_))
	res.on('end', () => console.log(data.join()))
});

req.end();

function getData(card){

}