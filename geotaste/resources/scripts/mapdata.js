var simplemaps_worldmap_mapdata={
main_settings:{
		//General settings
		width: 'responsive', //or 'responsive'
		background_color: '#FFFFFF',	
		background_transparent: 'yes',
		popups: 'detect', //on_click, on_hover, or detect
	
		//State defaults
    state_description: "Click to play music from this region",
    state_color: "#b5d781",
    state_hover_color: "#8bae54",
		state_url: 'https://simplemaps.com',
		border_size: 1.5,		
		border_color: '#ffffff',
		all_states_inactive: 'no',
		all_states_zoomable: 'no',		
		
		//Location defaults
    location_description: "Regional Office",
    location_color: "#de6667",
    location_opacity: ".9",
		location_hover_opacity: 1,
		location_url: '',
		location_size: 25,
    location_type: "triangle",
		location_border_color: '#FFFFFF',
		location_border: 2,
		location_hover_border: 2.5,				
		all_locations_inactive: 'no',
		all_locations_hidden: 'no',
		
		//Labels
		label_color: '#ffffff',	
		label_hover_color: '#ffffff',		
		label_size: 22,
		label_font: 'Arial',
		hide_labels: 'no',
    hide_eastern_labels: false,
		
		//Zoom settings
    manual_zoom: 'no',
    back_image: 'no',
    arrow_box: 'no',
    navigation_size: '40',
    navigation_color: '#f7f7f7',
    navigation_border_color: '#636363',
		initial_back: 'no', //Show back button when zoomed out and do this JavaScript upon click		
		initial_zoom: -1,  //-1 is zoomed out, 0 is for the first continent etc	
		initial_zoom_solo: 'no', //hide adjacent states when starting map zoomed in
		region_opacity: 1,
		region_hover_opacity: .6,
		zoom_out_incrementally: 'yes',  // if no, map will zoom all the way out on click
		zoom_percentage: .99,
		zoom_time: .5, //time to zoom between regions in seconds
		
		//Popup settings
		popup_color: 'white',
		popup_opacity: .9,
		popup_shadow: 1,
		popup_corners: 5,
		popup_font: '12px/1.5 Verdana, Arial, Helvetica, sans-serif',
		popup_nocss: 'no', //use your own css	
		
		//Advanced settings
		div: 'map',
		auto_load: 'yes',		
    rotate: '0',
		url_new_tab: 'yes', 
		images_directory: 'default', //e.g. 'map_images/'
    import_labels: 'no',
		fade_time:  .1, //time to fade out		
		link_text: 'View Website'  //Text mobile browsers will see for links	
		
	},
  state_specific: {
    AE: {
      name: "United Arab Emirates",
      inactive: "no",
      hide: "no",
      url: "/country-id?country=United%20Arab%20Emirates"
    },
    AF: {
      name: "Afghanistan",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Afghanistan"
    },
    AL: {
      name: "Albania",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Albania"
    },
    AM: {
      name: "Armenia",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Armenian"
    },
    AO: {
      name: "Angola",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Angola"
    },
    AR: {
      name: "Argentina",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Argentina"
    },
    AT: {
      name: "Austria",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Austria"
    },
    AU: {
      name: "Australia",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Australia"
    },
    AZ: {
      name: "Azerbaidjan",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Azerbaidjan"
    },
    BA: {
      name: "Bosnia-Herzegovina",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Bosnia-Herzegovina"
    },
    BD: {
      name: "Bangladesh",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Bangladesh"
    },
    BE: {
      name: "Belgium",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Belgium"
    },
    BF: {
      name: "Burkina Faso",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Burkina%20Faso"
    },
    BG: {
      name: "Bulgaria",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Bulgaria"
    },
    BH: {
      name: "Bahrain",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Bahrain"
    },
    BI: {
      name: "Burundi",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Burundi"
    },
    BJ: {
      name: "Benin",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Benin"
    },
    BN: {
      name: "Brunei Darussalam",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=BruneiDarussalam"
    },
    BO: {
      name: "Bolivia",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Bolivia"
    },
    BR: {
      name: "Brazil",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Brazil"
    },
    BS: {
      name: "Bahamas",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Bahamas"
    },
    BT: {
      name: "Bhutan",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Bhutan"
    },
    BW: {
      name: "Botswana",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Botswana"
    },
    BY: {
      name: "Belarus",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Belarus"
    },
    BZ: {
      name: "Belize",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Belize"
    },
    CA: {
      name: "Canada",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Canada"
    },
    CD: {
      name: "Congo",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Congo"
    },
    CF: {
      name: "Central African Republic",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Central%20African%20Republic"
    },
    CG: {
      name: "Congo",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Congo"
    },
    CH: {
      name: "Switzerland",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Switzerland"
    },
    CI: {
      name: "Ivory Coast",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Ivory%20Coast"
    },
    CL: {
      name: "Chile",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Chile"
    },
    CM: {
      name: "Cameroon",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Cameroon"
    },
    CN: {
      name: "China",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=China"
    },
    CO: {
      name: "Colombia",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Colombia"
    },
    CR: {
      name: "Costa Rica",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Costa%20Rica"
    },
    CU: {
      name: "Cuba",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Cuba"
    },
    CV: {
      name: "Cape Verde",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Cape%20Verde"
    },
    CY: {
      name: "Cyprus",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Cyprus"
    },
    CZ: {
      name: "Czech Republic",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Czech%20Republic"
    },
    DE: {
      name: "Germany",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Germany"
    },
    DJ: {
      name: "Djibouti",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Djibouti"
    },
    DK: {
      name: "Denmark",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Denmark"
    },
    DO: {
      name: "Dominican Republic",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Dominican%20Republic"
    },
    DZ: {
      name: "Algeria",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Algeria"
    },
    EC: {
      name: "Ecuador",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Ecuador"
    },
    EE: {
      name: "Estonia",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Estonia"
    },
    EG: {
      name: "Egypt",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Egypt"
    },
    EH: {
      name: "Western Sahara",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Western%20Sahara"
    },
    ER: {
      name: "Eritrea",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Eritrea"
    },
    ES: {
      name: "Spain",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Spain"
    },
    ET: {
      name: "Ethiopia",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Ethiopia"
    },
    FI: {
      name: "Finland",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Finland"
    },
    FJ: {
      name: "Fiji",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Fiji"
    },
    FK: {
      name: "Falkland Islands",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Falkland%20Islands"
    },
    FR: {
      name: "France",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=France"
    },
    GA: {
      name: "Gabon",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Gabon"
    },
    GB: {
      name: "Great Britain",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Great%20Britain"
    },
    GE: {
      name: "Georgia",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Georgia"
    },
    GF: {
      name: "French Guyana",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=FrenchGuyana"
    },
    GH: {
      name: "Ghana",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Ghana"
    },
    GL: {
      name: "Greenland",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Greenland"
    },
    GM: {
      name: "Gambia",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Gambia"
    },
    GN: {
      name: "Guinea",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Guinea"
    },
    GQ: {
      name: "Equatorial Guinea",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Equitorial%20Guinea"
    },
    GR: {
      name: "Greece",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Greece"
    },
    GS: {
      name: "S. Georgia & S. Sandwich Isls.",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=southgeorgiaandsouthsandwichislands"
    },
    GT: {
      name: "Guatemala",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Guatemala"
    },
    GW: {
      name: "Guinea Bissau",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Guinea-Bissau"
    },
    GY: {
      name: "Guyana",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Guyana"
    },
    HN: {
      name: "Honduras",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Honduras"
    },
    HR: {
      name: "Croatia",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Croatia"
    },
    HT: {
      name: "Haiti",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Haiti"
    },
    HU: {
      name: "Hungary",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Hungary"
    },
    IC: {
      name: "Canary Islands",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=CanaryIslands"
    },
    ID: {
      name: "Indonesia",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Indonesia"
    },
    IE: {
      name: "Ireland",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Ireland"
    },
    IL: {
      name: "Israel",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Israel"
    },
    IN: {
      name: "India",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=india"
    },
    IQ: {
      name: "Iraq",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Iraq"
    },
    IR: {
      name: "Iran",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Iran"
    },
    IS: {
      name: "Iceland",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Iceland"
    },
    IT: {
      name: "Italy",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Italy"
    },
    JM: {
      name: "Jamaica",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Jamaica"
    },
    JO: {
      name: "Jordan",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Jordan"
    },
    JP: {
      name: "Japan",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Japan"
    },
    KE: {
      name: "Kenya",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Kenya"
    },
    KG: {
      name: "Kyrgyzstan",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Kyrgyzstan"
    },
    KH: {
      name: "Cambodia",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Cambodia"
    },
    KP: {
      name: "North Korea",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=North%20Korea"
    },
    KR: {
      name: "South Korea",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=South%20Korea"
    },
    KW: {
      name: "Kuwait",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Kuwait"
    },
    KZ: {
      name: "Kazakhstan",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Kazakhstan"
    },
    LA: {
      name: "Laos",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Laos"
    },
    LK: {
      name: "Sri Lanka",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Sri%20Lanka"
    },
    LR: {
      name: "Liberia",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Liberia"
    },
    LS: {
      name: "Lesotho",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Lesotho"
    },
    LT: {
      name: "Lithuania",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Lithuania"
    },
    LU: {
      name: "Luxembourg",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Luxembourg"
    },
    LV: {
      name: "Latvia",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Latvia"
    },
    LY: {
      name: "Libya",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Libya"
    },
    MA: {
      name: "Morocco",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Morocco"
    },
    MD: {
      name: "Moldavia",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Moldavia"
    },
    ME: {
      name: "Montenegro",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Montenegro"
    },
    MG: {
      name: "Madagascar",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Madagascar"
    },
    MK: {
      name: "Macedonia",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Macedonia"
    },
    ML: {
      name: "Mali",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Mali"
    },
    MM: {
      name: "Myanmar",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Myanmar"
    },
    MN: {
      name: "Mongolia",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Mongolia"
    },
    MR: {
      name: "Mauritania",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Mauritania"
    },
    MW: {
      name: "Malawi",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Malawi"
    },
    MX: {
      name: "Mexico",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Mexico"
    },
    MY: {
      name: "Malaysia",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Malaysia"
    },
    MZ: {
      name: "Mozambique",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Mozambique"
    },
    NA: {
      name: "Namibia",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Namibia"
    },
    NC: {
      name: "New Caledonia (French)",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=New%20Caledonia"
    },
    NE: {
      name: "Niger",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Niger"
    },
    NG: {
      name: "Nigeria",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Nigeria"
    },
    NI: {
      name: "Nicaragua",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Nicaragua"
    },
    NL: {
      name: "Netherlands",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Netherlands"
    },
    NO: {
      name: "Norway",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Norway"
    },
    NP: {
      name: "Nepal",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Nepal"
    },
    NZ: {
      name: "New Zealand",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=New%20Zealand"
    },
    OM: {
      name: "Oman",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Oman"
    },
    PA: {
      name: "Panama",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Panama"
    },
    PE: {
      name: "Peru",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Peru"
    },
    PG: {
      name: "Papua New Guinea",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Papua%20New%20Guinea"
    },
    PH: {
      name: "Philippines",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Philippines"
    },
    PK: {
      name: "Pakistan",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Pakistan"
    },
    PL: {
      name: "Poland",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Poland"
    },
    PR: {
      name: "Puerto Rico",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Puerto%20Rico"
    },
    PS: {
      name: "Palestine",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Palestine"
    },
    PT: {
      name: "Portugal",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Portugal"
    },
    PY: {
      name: "Paraguay",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Paraguay"
    },
    QA: {
      name: "Qatar",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Qatar"
    },
    RO: {
      name: "Romania",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Romania"
    },
    RS: {
      name: "Serbia",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Serbia"
    },
    RU: {
      name: "Russia",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Russia"
    },
    RW: {
      name: "Rwanda",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Rwanda"
    },
    SA: {
      name: "Saudi Arabia",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Saudi%20Arabia"
    },
    SB: {
      name: "Solomon Islands",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Soloman%20Islands"
    },
    SD: {
      name: "Sudan",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Sudan"
    },
    SE: {
      name: "Sweden",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Sweden"
    },
    SI: {
      name: "Slovenia",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Slovenia"
    },
    SK: {
      name: "Slovak Republic",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Slovak%20Republic"
    },
    SL: {
      name: "Sierra Leone",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Sierra%20Leone"
    },
    SN: {
      name: "Senegal",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Senegal"
    },
    SO: {
      name: "Somalia",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Somalia"
    },
    SR: {
      name: "Suriname",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Suriname"
    },
    SS: {
      name: "South Sudan",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=South%20Sudan"
    },
    SV: {
      name: "El Salvador",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=El%20Salvador"
    },
    SY: {
      name: "Syria",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Syria"
    },
    SZ: {
      name: "Swaziland",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Swaziland"
    },
    TD: {
      name: "Chad",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Chad"
    },
    TG: {
      name: "Togo",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Togo"
    },
    TH: {
      name: "Thailand",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Thailand"
    },
    TJ: {
      name: "Tadjikistan",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Tadjikistan"
    },
    TL: {
      name: "East Timor",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=EastTimor"
    },
    TM: {
      name: "Turkmenistan",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Turkmenistan"
    },
    TN: {
      name: "Tunisia",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Tunisia"
    },
    TR: {
      name: "Turkey",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Turkey"
    },
    TT: {
      name: "Trinidad and Tobago",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Trinidad%20and%20Tobago"
    },
    TW: {
      name: "Taiwan",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Taiwan"
    },
    TZ: {
      name: "Tanzania",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Tanzania"
    },
    UA: {
      name: "Ukraine",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Ukraine"
    },
    UG: {
      name: "Uganda",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Uganda"
    },
    US: {
      name: "United States",
      inactive: "no",
      hide: "no",
      url: "/country-id?country=United%20States%20of%20America"
    },
    UY: {
      name: "Uruguay",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Uruguay"
    },
    UZ: {
      name: "Uzbekistan",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Uzbekistan"
    },
    VE: {
      name: "Venezuela",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Venezuela"
    },
    VN: {
      name: "Vietnam",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Vietnam"
    },
    VU: {
      name: "Vanuatu",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Vanuatu"
    },
    YE: {
      name: "Yemen",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Yemen"
    },
    ZA: {
      name: "South Africa",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=South%20Africa"
    },
    ZM: {
      name: "Zambia",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Zambia"
    },
    ZW: {
      name: "Zimbabwe",
      hide: "no",
      inactive: "no",
      url: "/country-id?country=Zimbabwe"
    }
  },
  /*
  locations: {
    "0": {
      name: "Paris",
      lat: "48.866666670",
      lng: "2.333333333",
      type: "triangle"
    },
    "1": {
      name: "Tokyo",
      lat: "35.666666670",
      lng: "139.750000000",
      type: "triangle"
    },
    "2": {
      name: "Shanghai",
      lat: "31.100000000",
      lng: "121.366666700",
      type: "square"
    },
    "3": {
      name: "New York",
      lat: "40.700000000",
      lng: "-73.900000000",
      type: "square"
    },
    "4": {
      name: "Los Angeles",
      lat: "34.000000000",
      lng: "-118.250000000",
      type: "circle"
    },
    "5": {
      name: "Cape Town",
      lat: "-35.916666670",
      lng: "18.366666670",
      type: "circle"
    },
    "6": {
      name: "Santiago",
      lat: "-33.450000000",
      lng: "-70.666666670",
      type: "circle"
    },
    "7": {
      name: "Cairo",
      lat: "30.050000000",
      lng: "31.250000000",
      type: "triangle"
    },
    "8": {
      name: "Singapore",
      lat: "1.300000000",
      lng: "103.833333300",
      color: "#1c4922",
      description: "Company Headquarters",
      type: "star",
      size: "40",
      opacity: "1"
    }
  },
  */
  regions: {
    "0": {
      name: "North America",
      states: [
        "MX",
        "CA",
        "US",
        "GL"
      ]
    },
    "1": {
      name: "South America",
      states: [
        "EC",
        "AR",
        "VE",
        "BR",
        "CO",
        "BO",
        "PE",
        "BZ",
        "CL",
        "CR",
        "CU",
        "DO",
        "SV",
        "GT",
        "GY",
        "GF",
        "HN",
        "NI",
        "PA",
        "PY",
        "PR",
        "SR",
        "UY",
        "JM",
        "HT",
        "BS"
      ]
    },
    "2": {
      name: "Europe",
      states: [
        "IT",
        "NL",
        "NO",
        "DK",
        "IE",
        "GB",
        "RO",
        "DE",
        "FR",
        "AL",
        "AM",
        "AT",
        "BY",
        "BE",
        "LU",
        "BG",
        "CZ",
        "EE",
        "GE",
        "GR",
        "HU",
        "IS",
        "LV",
        "LT",
        "MD",
        "PL",
        "PT",
        "RS",
        "SI",
        "HR",
        "BA",
        "ME",
        "MK",
        "SK",
        "ES",
        "FI",
        "SE",
        "CH",
        "TR",
        "CY",
        "UA"
      ]
    },
    "3": {
      name: "Africa and the Middle East",
      states: [
        "QA",
        "SA",
        "AE",
        "SY",
        "OM",
        "KW",
        "PK",
        "AZ",
        "AF",
        "IR",
        "IQ",
        "IL",
        "PS",
        "JO",
        "LB",
        "YE",
        "TJ",
        "TM",
        "UZ",
        "KG",
        "NE",
        "AO",
        "EG",
        "TN",
        "GA",
        "DZ",
        "LY",
        "CG",
        "GQ",
        "BJ",
        "BW",
        "BF",
        "BI",
        "CM",
        "CF",
        "TD",
        "CI",
        "CD",
        "DJ",
        "ET",
        "GM",
        "GH",
        "GN",
        "GW",
        "KE",
        "LS",
        "LR",
        "MG",
        "MW",
        "ML",
        "MA",
        "MR",
        "MZ",
        "NA",
        "NG",
        "ER",
        "RW",
        "SN",
        "SL",
        "SO",
        "ZA",
        "SD",
        "SS",
        "SZ",
        "TZ",
        "TG",
        "UG",
        "EH",
        "ZM",
        "ZW"
      ]
    },
    "4": {
      name: "South Asia",
      states: [
        "TW",
        "AU",
        "MY",
        "IN",
        "NZ",
        "TH",
        "BN",
        "JP",
        "VN",
        "LK",
        "SB",
        "FJ",
        "BD",
        "BT",
        "KH",
        "LA",
        "MM",
        "NP",
        "KP",
        "PG",
        "PH",
        "KR",
        "ID",
        "CN"
      ]
    },
    "5": {
      name: "North Asia",
      states: [
        "MN",
        "RU",
        "KZ"
      ]
    }
  },
  labels: {}
};