function Zeit() {
	// stundenkorrektur: GMZ +2 im sommer
	var korr = 2;

	// Datum setzen
	var minutes=1000*60;
	var hours=minutes*60;
	var days=hours*24;
	var years=days*365;
	var d=new Date();
	var t=d.getTime();
	var zeit=t/years;

    var offset = d.getTimezoneOffset();
    console.log(offset / 60);

	// Zeit generieren
	var jahre=Math.floor(zeit);
	zeit=zeit-jahre;
	zeit=zeit*365;
	var tage=Math.floor(zeit);
	zeit=zeit-tage;
	zeit=zeit*24;
	var stunden=Math.floor(zeit);
	var stundenk = stunden - (offset / 60);
	zeit=zeit-stunden;
	zeit=zeit*60;
	var minuten=Math.floor(zeit);
	zeit=zeit-minuten;
	zeit=zeit*60;
	var sekunden=Math.floor(zeit);

	
	// stundenzahlen
	var z1 = 'ein';
	var z1s = 'eins';
	var z2 = 'zwei';
	var z3 = 'drei';
	var z4 = 'vier';
	var z5 = 'fuenf';
	var z6 = 'sechs';
	var z7 = 'sieben';
	var z8 = 'acht';
	var z9 = 'neun';
	var z10 = 'zehn';
	var z11 = 'elf';
	var z12 = 'zwoelf';

	// minutenzahlen
	var v1 = 'Veins';
	var v2 = 'Vzwei';
	var v3 = 'Vdrei';
	var v4 = 'Vvier';
	var v5 = 'Vfuenf';
	var v6 = 'Vsechs';
	var v7 = 'Vsieben';
	var v8 = 'Vacht';
	var v9 = 'Vneun';
	var v10 = 'Vzehn';
	var v11 = 'Velf';
	var v12 = 'Vzwoelf';
	var v13 = 'Vdreizehn';
	var v14 = 'Vvierzehn';
	var v15 = 'viertel';
	var v16 = 'Vsechzehn';
	var v17 = 'Vsiebzehn';
	var v18 = 'Vachtzehn';
	var v19 = 'Vneunzehn';
	var v20 = 'Vzwanzig';

	var m = minuten;
	var s = stundenk;
	
	document.getElementById('es').className = 'glow';
	document.getElementById('ist').className = 'glow';

	if ( m <= 20 ) {
		document.getElementById('nach').className = 'glow';
		document.getElementById('vor').className = 'noglow';
		if ( m == 0) {
			document.getElementById('uhr').className = 'glow';
			document.getElementById('nach').className = 'noglow';
			document.getElementById(v1).className = 'noglow';
		}
		else if ( m == 15) {
			document.getElementById(v15).className = 'glow'; document.getElementById(v4).className = 'glow'; document.getElementById(v14).className = 'noglow';
		}
		else {
			if ( m == 1 ) { document.getElementById(v1).className = 'glow'; document.getElementById('uhr').className = 'noglow'; }
			else if ( m == 2 ) { document.getElementById(v2).className = 'glow'; document.getElementById(v1).className = 'noglow'; }
			else if ( m == 3 ) { document.getElementById(v3).className = 'glow'; document.getElementById(v2).className = 'noglow'; }
			else if ( m == 4 ) { document.getElementById(v4).className = 'glow'; document.getElementById(v3).className = 'noglow'; }
			else if ( m == 5 ) { document.getElementById(v5).className = 'glow'; document.getElementById(v4).className = 'noglow'; }
			else if ( m == 6 ) { document.getElementById(v6).className = 'glow'; document.getElementById(v5).className = 'noglow'; }
			else if ( m == 7 ) { document.getElementById(v7).className = 'glow'; document.getElementById(v6).className = 'noglow'; }
			else if ( m == 8 ) { document.getElementById(v8).className = 'glow';  document.getElementById(v7).className = 'noglow';}
			else if ( m == 9 ) { document.getElementById(v9).className = 'glow'; document.getElementById(v8).className = 'noglow'; }
			else if ( m == 10 ) { document.getElementById(v10).className = 'glow'; document.getElementById(v9).className = 'noglow'; }
			else if ( m == 11 ) { document.getElementById(v11).className = 'glow'; document.getElementById(v10).className = 'noglow'; }
			else if ( m == 12 ) { document.getElementById(v12).className = 'glow'; document.getElementById(v11).className = 'noglow'; }
			else if ( m == 13 ) { document.getElementById(v13).className = 'glow'; document.getElementById(v12).className = 'noglow'; }
			else if ( m == 14 ) { document.getElementById(v14).className = 'glow'; document.getElementById(v13).className = 'noglow'; }
			else if ( m == 16 ) { document.getElementById(v16).className = 'glow'; document.getElementById(v15).className = 'noglow'; document.getElementById(v4).className = 'noglow'; }
			else if ( m == 17 ) { document.getElementById(v17).className = 'glow'; document.getElementById(v16).className = 'noglow'; }
			else if ( m == 18 ) { document.getElementById(v18).className = 'glow'; document.getElementById(v17).className = 'noglow'; }
			else if ( m == 19 ) { document.getElementById(v9).className = 'glow';document.getElementById(v19).className = 'glow'; document.getElementById(v18).className = 'noglow'; }
			else if ( m == 20 ) { document.getElementById(v20).className = 'glow'; document.getElementById(v19).className = 'noglow'; document.getElementById(v9).className = 'noglow'; }
		}
	}
	else { s++; }
	// wenn 20nach durch ist, wird für die nächste stunde geschrieben... 8:30 = halb neun.

	if ( m > 20) {
		if (m < 40) {
			document.getElementById('halb').className = 'glow';
			if ( m < 30 ) {
				document.getElementById('vor').className = 'glow';
				document.getElementById('nach').className = 'noglow';
				if ( m == 21 ) { document.getElementById(v9).className = 'glow'; document.getElementById(v20).className = 'noglow'; }
				else if ( m == 22 ) { document.getElementById(v8).className = 'glow'; document.getElementById(v9).className = 'noglow'; }
				else if ( m == 23 ) { document.getElementById(v7).className = 'glow'; document.getElementById(v8).className = 'noglow'; }
				else if ( m == 24 ) { document.getElementById(v6).className = 'glow'; document.getElementById(v7).className = 'noglow'; }
				else if ( m == 25 ) { document.getElementById(v5).className = 'glow'; document.getElementById(v6).className = 'noglow'; }
				else if ( m == 26 ) { document.getElementById(v4).className = 'glow'; document.getElementById(v5).className = 'noglow'; }
				else if ( m == 27 ) { document.getElementById(v3).className = 'glow'; document.getElementById(v4).className = 'noglow'; }
				else if ( m == 28 ) { document.getElementById(v2).className = 'glow'; document.getElementById(v3).className = 'noglow'; }
				else if ( m == 29 ) { document.getElementById(v1).className = 'glow'; document.getElementById(v2).className = 'noglow'; }
			}
			else if ( m == 30) {
				document.getElementById(v1).className = 'noglow'; document.getElementById('vor').className = 'noglow';
			}			
			else {
				document.getElementById('nach').className = 'glow';
				if ( m == 39 ) { document.getElementById(v9).className = 'glow'; document.getElementById(v8).className = 'noglow'; }
				else if ( m == 38 ) { document.getElementById(v8).className = 'glow'; document.getElementById(v7).className = 'noglow'; }
				else if ( m == 37 ) { document.getElementById(v7).className = 'glow'; document.getElementById(v6).className = 'noglow'; }
				else if ( m == 36 ) { document.getElementById(v6).className = 'glow'; document.getElementById(v5).className = 'noglow'; }
				else if ( m == 35 ) { document.getElementById(v5).className = 'glow'; document.getElementById(v4).className = 'noglow'; }
				else if ( m == 34 ) { document.getElementById(v4).className = 'glow'; document.getElementById(v3).className = 'noglow'; }
				else if ( m == 33 ) { document.getElementById(v3).className = 'glow'; document.getElementById(v2).className = 'noglow'; }
				else if ( m == 32 ) { document.getElementById(v2).className = 'glow'; document.getElementById(v1).className = 'noglow'; }
				else if ( m == 31 ) { document.getElementById(v1).className = 'glow'; }
			}
		}
		else {
			document.getElementById('vor').className = 'glow'; document.getElementById('nach').className = 'noglow'; document.getElementById('halb').className = 'noglow';
			if ( m == 45) {
				document.getElementById(v15).className = 'glow'; document.getElementById(v4).className = 'glow'; document.getElementById(v16).className = 'noglow';
			}
			else {
				if ( m == 59 ) { document.getElementById(v1).className = 'glow'; document.getElementById(v2).className = 'noglow'; }
				else if ( m == 58 ) { document.getElementById(v2).className = 'glow'; document.getElementById(v3).className = 'noglow'; }
				else if ( m == 57 ) { document.getElementById(v3).className = 'glow'; document.getElementById(v4).className = 'noglow'; }
				else if ( m == 56 ) { document.getElementById(v4).className = 'glow'; document.getElementById(v5).className = 'noglow'; }
				else if ( m == 55 ) { document.getElementById(v5).className = 'glow'; document.getElementById(v6).className = 'noglow'; }
				else if ( m == 54 ) { document.getElementById(v6).className = 'glow'; document.getElementById(v7).className = 'noglow'; }
				else if ( m == 53 ) { document.getElementById(v7).className = 'glow'; document.getElementById(v8).className = 'noglow'; }
				else if ( m == 52 ) { document.getElementById(v8).className = 'glow'; document.getElementById(v9).className = 'noglow'; }
				else if ( m == 51 ) { document.getElementById(v9).className = 'glow'; document.getElementById(v10).className = 'noglow'; }
				else if ( m == 50 ) { document.getElementById(v10).className = 'glow'; document.getElementById(v11).className = 'noglow'; }
				else if ( m == 49 ) { document.getElementById(v11).className = 'glow'; document.getElementById(v12).className = 'noglow'; }
				else if ( m == 48 ) { document.getElementById(v12).className = 'glow'; document.getElementById(v13).className = 'noglow'; }
				else if ( m == 47 ) { document.getElementById(v13).className = 'glow'; document.getElementById(v14).className = 'noglow'; }
				else if ( m == 46 ) { document.getElementById(v14).className = 'glow'; document.getElementById(v15).className = 'noglow'; document.getElementById(v4).className = 'noglow'; }
				else if ( m == 44 ) { document.getElementById(v16).className = 'glow'; document.getElementById(v17).className = 'noglow'; }
				else if ( m == 43 ) { document.getElementById(v17).className = 'glow'; document.getElementById(v18).className = 'noglow'; document.getElementById(v8).className = 'noglow'; }
				else if ( m == 42 ) { document.getElementById(v18).className = 'glow'; document.getElementById(v8).className = 'glow'; document.getElementById(v19).className = 'noglow'; }
				else if ( m == 41 ) { document.getElementById(v19).className = 'glow'; document.getElementById(v20).className = 'noglow'; }
				else if ( m == 40 ) { document.getElementById(v20).className = 'glow'; document.getElementById(v9).className = 'noglow'; }
			}
		}
	}
	// ab hier die stundenbeleuchtung
	if (s == 1 || s == 13 ) {
		document.getElementById(z1s).className = 'glow'; document.getElementById(z1).className = 'glow'; document.getElementById(z12).className = 'noglow';
	}
	if (s == 2 || s == 14 ) {
		document.getElementById(z2).className = 'glow'; document.getElementById(z1s).className = 'noglow'; document.getElementById(z1).className = 'noglow'; 
	}
	if (s == 3 || s == 15 ) {
		document.getElementById(z3).className = 'glow'; document.getElementById(z2).className = 'noglow';
	}
	if (s == 4 || s == 16 ) {
		document.getElementById(z4).className = 'glow'; document.getElementById(z3).className = 'noglow';
	}
	if (s == 5 || s == 17 ) {
		document.getElementById(z5).className = 'glow'; document.getElementById(z4).className = 'noglow';
	}
	if (s == 6 || s == 18 ) {
		document.getElementById(z6).className = 'glow'; document.getElementById(z5).className = 'noglow';
	}
	if (s == 7 || s == 19 ) {
		document.getElementById(z7).className = 'glow'; document.getElementById(z6).className = 'noglow';
	}
	if (s == 8 || s == 20 ) {
		document.getElementById(z8).className = 'glow'; document.getElementById(z7).className = 'noglow';
	}
	if (s == 9 || s == 21 ) {
		document.getElementById(z9).className = 'glow'; document.getElementById(z8).className = 'noglow';
	}
	if (s == 10 || s == 22 ) {
		document.getElementById(z10).className = 'glow'; document.getElementById(z9).className = 'noglow';
	}
	if (s == 11 || s == 23 ) {
		document.getElementById(z11).className = 'glow'; document.getElementById(z10).className = 'noglow';
	}
	if (s == 12 || s == 24 ) {
		document.getElementById(z12).className = 'glow'; document.getElementById(z11).className = 'noglow';
	}
}
