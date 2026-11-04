(()=>{'use strict';
const base='';const phone='733 379 379',tel='tel:+48733379379',email='transpomoc@gmail.com';
const photo={hero:'https://transpomoc.com.pl/wp-content/uploads/2019/04/IMG_20190411_164735.jpg',road:'https://transpomoc.com.pl/wp-content/uploads/2021/03/IMG_20210115_072115-300x225.jpg',machines:'https://transpomoc.com.pl/wp-content/uploads/2021/12/20211115_151018-300x225.jpg'};
const nav=[['index.html','Start'],['pomoc-drogowa.html','Pomoc drogowa'],['transport-maszyn.html','Transport maszyn'],['wynajem.html','Wynajem'],['galeria.html','Galeria'],['blog.html','Blog'],['kontakt.html','Kontakt']];
const regions=[['pomoc-drogowa-a2.html','Pomoc drogowa A2'],['pomoc-drogowa-lubon.html','Pomoc drogowa Luboń'],['pomoc-drogowa-komorniki.html','Pomoc drogowa Komorniki'],['pomoc-drogowa-dopiewo.html','Pomoc drogowa Dopiewo'],['holowanie-zakrzewo.html','Holowanie Zakrzewo']];
const extras=[['awaryjne-odpalanie.html','Awaryjne odpalanie'],['dowozenie-paliwa.html','Dowóz paliwa'],...regions];
const meta={
 'index.html':['GOTOWI.<br><span class="outline">NA KAŻDĄ</span><br><em>TRASĘ.</em>','POMOC DROGOWA • POZNAŃ • 24/7','Całodobowa pomoc drogowa, transport maszyn do 24 ton, wynajem lawet i własny warsztat mechaniczny.'],
 'pomoc-drogowa.html':['POMOC<br><em>DROGOWA 24/7.</em>','HOLOWANIE • A2 / S5 / S11','Awaria, kolizja czy problem na trasie? TransPomoc obsługuje Poznań, Luboń i Komorniki oraz drogi całego regionu.'],
 'transport-maszyn.html':['DUŻY ŁADUNEK.<br><em>PEWNY PLAN.</em>','TRANSPORT MASZYN BUDOWLANYCH','Transport maszyn i sprzętu specjalistycznego do 24 ton. Zezwolenie kategorii II.'],
 'wynajem.html':['LAWETA NA<br><em>TWOICH ZASADACH.</em>','WYPOŻYCZALNIA LAWET • POZNAŃ','Wynajem autolawet i przyczep. Aktualny katalog do końcowego potwierdzenia przez właściciela.'],
 'galeria.html':['REALNE PRACE.<br><em>PRAWDZIWE TRASY.</em>','GALERIA TRANSPOMOC','Realizacje transportu pojazdów, maszyn i sprzętu specjalistycznego.'],
 'blog.html':['WIEDZA<br><em>Z DROGI.</em>','BLOG I PORADNIKI','Praktyczne poradniki o pomocy drogowej, transporcie maszyn i wynajmie lawet.'],
 'kontakt.html':['POROZMAWIAJMY<br><em>O TRANSPORCIE.</em>','KONTAKT TRANSPOMOC','Pomoc drogowa i wycena transportu pod numerem 733 379 379.']
};
const articles=[
 ['awaria-na-autostradzie.html','Awaria na A2 — jak postępować?','Bezpieczeństwo podczas awarii na autostradzie','Zadbaj najpierw o bezpieczeństwo. Jeśli to możliwe, zjedź w dozwolone miejsce i włącz światła awaryjne. Nie pozostawaj bez potrzeby przy samochodzie w ruchu drogowym. W razie zagrożenia życia zadzwoń pod 112. Przy kontakcie z pomocą drogową podaj dokładną lokalizację, kierunek jazdy i rodzaj pojazdu.'],
 ['transport-maszyn-poradnik.html','Jak przygotować maszynę do transportu?','Wymiary, masa i przygotowanie załadunku','Przed zleceniem przewozu przygotuj masę maszyny, jej wymiary i zdjęcia. Zwróć uwagę na warunki dojazdu do miejsca załadunku, możliwość wjazdu na platformę i termin rozładunku. Przy ładunkach ponadgabarytowych uzgodnij formalności i dobór trasy z wykonawcą.'],
 ['wynajem-lawety-poradnik.html','Wynajem lawety — co warto sprawdzić?','Ładowność, uprawnienia i warunki wynajmu','Sprawdź dopuszczalną masę całkowitą zestawu, ładowność, wymiary platformy i sposób zabezpieczenia ładunku. Ustal wymagane uprawnienia kierowcy, dostępność przyczepy, stawkę dobową, kaucję oraz warunki zwrotu.']
];
const a=(u,t,c='')=>'<a href="'+u+'"'+(c?' class="'+c+'"':'')+'>'+t+'</a>';
const eyebrow=t=>'<span class="kicker">'+t+'</span>';
const btn=(u,t,cls='')=>a(u,t,'button '+cls);
const panel=(label,title,body,cls='')=>'<section class="section '+cls+'"><div class="wrap">'+eyebrow(label)+'<h2>'+title+'</h2>'+body+'</div></section>';
const shot=(id,alt)=>'<div class="client-shot photo'+id+'" role="img" aria-label="'+alt+'"></div>';
const cards=items=>'<div class="info-grid">'+items.map((it,i)=>'<article class="info-card"><small>'+(i+1).toString().padStart(2,'0')+' / TRANSPOMOC</small><h3>'+it[0]+'</h3><p>'+it[1]+'</p>'+(it[2]?a(it[2],'ZOBACZ SZCZEGÓŁY ↗','more'):'')+'</article>').join('')+'</div>';
const regionCards=()=>'<div class="link-grid">'+extras.map(it=>a(it[0],it[1]+' ↗')).join('')+'</div>';
const photosSection=()=>panel('AUTENTYCZNE REALIZACJE','PRACA, KTÓRĄ WIDAĆ.','<div class="photo-grid">'+[['Transport koparki na naczepie',0],['Transport podestów roboczych',1],['Transport podnośnika',2],['Transport ciężarówki',3],['Transport sprzętu budowlanego',4],['Transport samochodu dostawczego',5]].map(([t,n])=>a('galeria.html',shot(n,t)+'<strong>'+t+' ↗</strong>','photo-card')).join('')+'</div><p class="fine">Fotografie przesłane przez właściciela. Bez zdjęć ze starej galerii.</p>');
const lead=()=>'<div class="callout"><div>'+eyebrow('GOTOWI DO DZIAŁANIA')+'<h2>POTRZEBUJESZ<br>LAWETY?</h2><p>Telefoniczna wycena i dobór transportu.</p></div>'+btn(tel,'☎ '+phone+' ↗','dark')+'</div>';
const rentalCard=(tag,name,details,price,foot)=>'<article class="rental"><small>'+tag+'</small><h3>'+name+'</h3><div class="detail-list">'+details.map(([k,v])=>'<div><span>'+k+'</span><b>'+v+'</b></div>').join('')+'</div><strong class="big-price">'+price+'</strong><p>'+foot+'</p></article>';
const site={
 'index.html':()=>'<div class="marquee"><div class="wrap"><b>POMOC DROGOWA 24/7</b><b>TRANSPORT MASZYN</b><b>WYNAJEM LAWET</b><b>POLSKA I EUROPA</b></div></div>'+
 panel('SZEROKIE MOŻLIWOŚCI','WIĘCEJ NIŻ ZWYKŁA LAWETA.',cards([['POMOC DROGOWA 24H','Holowanie samochodów osobowych, dostawczych oraz pomoc przy awariach.','pomoc-drogowa.html'],['TRANSPORT MASZYN','Transport maszyn budowlanych i sprzętu do 24 ton.','transport-maszyn.html'],['WYNAJEM LAWET','Wybierz odpowiednią przyczepę lub autolawetę na swoją trasę.','wynajem.html']]))+
 '<section class="section section-dark"><div class="wrap split"><div>'+eyebrow('PRAWDZIWE REALIZACJE')+'<h2>PEWNY TRANSPORT.<br>KAŻDEGO DNIA.</h2><p>Przewozimy samochody, sprzęt budowlany i pojazdy o nietypowych wymiarach. Zobacz, jak wyglądają nasze realizacje.</p>'+btn('galeria.html','ZOBACZ GALERIĘ ↗')+'</div>'+shot(0,'Transport koparki na naczepie')+'</div></section>'+
 photosSection()+panel('OBSŁUGUJEMY CAŁY REGION','ZNAJDZIESZ NAS BLISKO.',regionCards(),'section-dark')+lead(),
 'pomoc-drogowa.html':()=>panel('CAŁODOBOWO • 7 DNI W TYGODNIU','SZYBKA REAKCJA. BEZPIECZNE HOLOWANIE.',cards([['HOLOWANIE POJAZDÓW','Auta osobowe, dostawcze, powypadkowe i wymagające specjalnego załadunku.'],['AWARYJNY ROZRUCH','Uruchamianie samochodu przy problemach z akumulatorem.','awaryjne-odpalanie.html'],['DOWOŻENIE PALIWA','Pomoc w sytuacji braku paliwa na trasie.','dowozenie-paliwa.html'],['WYMIANA KOŁA','Pomoc przy uszkodzonym kole na drodze.'],['MECHANIKA I PARKING','Własny warsztat mechaniczny oraz parking na terenie firmy.']]))+panel('POMOC DROGOWA W REGIONIE','POZNAŃ. LUBOŃ. KOMORNIKI.',regionCards(),'section-dark')+lead(),
 'transport-maszyn.html':()=>panel('TRANSPORT SPECJALISTYCZNY','MASZYNY. POJAZDY. GABARYTY.','<div class="split"><div><p>Transport koparek, ładowarek, podestów i sprzętu do 24 ton. Przewozy w Polsce i Europie.</p><p>Dysponujemy zezwoleniem kategorii II. Wymiary, obciążenie i wymagania dotyczące trasy ustalamy indywidualnie.</p>'+btn('kontakt.html','ZAPYTAJ O WYCENĘ ↗')+'</div>'+shot(1,'Przewóz podestów i sprzętu')+'</div>')+panel('PRZEWOZY DLA FIRM','ŁADUNEK DOPASOWANY DO SPRZĘTU.',cards([['KOPARKI','Koparki gąsienicowe, kołowe oraz mniejsze maszyny budowlane.'],['PODNOŚNIKI','Podesty ruchome, zwyżki i sprzęt do prac wysokościowych.'],['ŁADUNKI NIETYPOWE','Pojazdy i urządzenia o szczególnych wymiarach.']]),'section-dark')+photosSection()+lead(),
 'wynajem.html':()=>panel('OFERTA WYNAJMU','WYBIERZ ODPOWIEDNIĄ LAWETĘ.','<p class="muted">Dostępność oraz szczegóły rezerwacji potwierdzamy telefonicznie.</p><div class="rental-grid">'+
 rentalCard('MODEL 2025','BORO BR3',[['Długość','8,5 m'],['Ładowność','2510 kg'],['Rok','2025']],'250 ZŁ / doba','Szczegóły rezerwacji telefonicznie.')+
 rentalCard('OSOBNY MODEL','LAWETA PŁASKA 8,5 M',[['Długość','8,5 m'],['Typ','Platforma płaska']],'250 ZŁ / doba','To osobny model, niezależny od Boro BR3.')+
 rentalCard('WYNAJEM','LAWETA 6 M',[['Długość','6 m']],'200 ZŁ','Warunki i jednostka rozliczenia do uzgodnienia.')+
 rentalCard('W PRODUKCJI','PRZYCZEPA 5 M',[['Długość','5 m'],['Planowane ukończenie','styczeń 2027']],'WKRÓTCE','Obecnie niedostępna — w produkcji.')+
 '</div>')+
 panel('POZOSTAŁE MODELE','SPRAWDŹ PEŁNĄ OFERTĘ.',cards([['IVECO DAILY','Szczegóły i dostępność do uzgodnienia telefonicznie.'],['BESTTRAILERS','Pozostałe lawety i przyczepy w ofercie.'],['NIEWIADÓW JUPITER','Szczegóły wynajmu dostępne telefonicznie.']]),'section-dark')+lead(),
 'galeria.html':()=>photosSection()+panel('GALERIA NOWYCH MATERIAŁÓW','REALIZACJE W KADRZE.','<p>Zdjęcia przesłane przez firmę TransPomoc w październiku i listopadzie 2026 roku. Nazwy modeli sprzętu wymagają jeszcze ostatecznego przyporządkowania.</p><p class="muted">Wersja demonstracyjna przedstawia wybrane kadry, komplet zdjęć znajduje się w lokalnej paczce projektu.</p>','section-dark'),
 'blog.html':()=>panel('PORADNIKI • TRANSPOMOC','WIEDZA, KTÓRA PRZYDAJE SIĘ W TRASIE.','<p class="muted">Nowe artykuły demonstracyjne — nie są kopiami istniejącego bloga i wymagają akceptacji przed publikacją.</p><div class="info-grid">'+articles.map((it,i)=>'<article class="info-card"><small>PORADNIK 0'+(i+1)+'</small><h3>'+it[1]+'</h3><p>'+it[2]+'</p>'+a(it[0],'CZYTAJ ARTYKUŁ ↗','more')+'</article>').join('')+'</div>')+lead(),
 'kontakt.html':()=>panel('KONTAKT','ZAPRASZAMY DO KONTAKTU.','<div class="info-grid"><article class="info-card"><small>TELEFON</small><h3>'+a(tel,phone)+'</h3><p>Pomoc drogowa 24/7, wycena usługi i rezerwacja.</p></article><article class="info-card"><small>EMAIL</small><h3>'+a('mailto:'+email,'NAPISZ DO NAS ↗')+'</h3><p>'+email+'</p></article><article class="info-card"><small>DANE FIRMY</small><h3>POZNAŃ</h3><p>os. Powstań Narodowych 1/14, 61-213 Poznań<br>NIP: 7773117110</p></article></div><p class="fine">Dane na podstawie oryginalnej strony firmy; do potwierdzenia przed oficjalnym wdrożeniem.</p>')+lead()
};
const extrasInfo={
 'awaryjne-odpalanie.html':['AWARYJNE ODPALANIE','Rozładowany akumulator?','Awaryjne uruchamianie pojazdów za pomocą boostera lub przewodów rozruchowych w Poznaniu i okolicach.'],
 'dowozenie-paliwa.html':['DOWOŻENIE PALIWA','Brak paliwa na trasie?','Dowóz paliwa w rejonie Poznania i tras A2, S5 i S11 po uzgodnieniu szczegółów telefonicznie.'],
 'calodobowa-pomoc-drogowa-poznan-24h.html':['POMOC DROGOWA 24H','Gotowość przez całą dobę','Pomoc kierowcom samochodów osobowych i dostawczych w razie awarii, kolizji lub konieczności holowania.'],
 'pomoc-drogowa-a2.html':['LAWETA A2','Awaria na autostradzie?','Pomoc drogowa na poznańskim odcinku A2, holowanie i transport unieruchomionego pojazdu.'],
 'pomoc-drogowa-lubon.html':['LAWETA LUBOŃ','Pomoc drogowa w Luboniu','Całodobowa pomoc kierowcom i holowanie pojazdów w Luboniu oraz okolicach.'],
 'pomoc-drogowa-komorniki.html':['LAWETA KOMORNIKI','Pomoc drogowa w Komornikach','Obsługa awarii i holowanie aut na terenie Komornik oraz tras dojazdowych.'],
 'pomoc-drogowa-dopiewo.html':['LAWETA DOPIEWO','Pomoc drogowa w Dopiewie','Transport samochodów i pomoc w przypadku awarii na trasie w rejonie Dopiewa.'],
 'holowanie-zakrzewo.html':['HOLOWANIE ZAKRZEWO','Holowanie w Zakrzewie','Przewóz samochodów uszkodzonych i pomoc drogowa w Zakrzewie.']
};
for(const [k,v] of Object.entries(extrasInfo)) {meta[k]=[v[0].toUpperCase()+'<br><em>TRANSPOMOC.</em>',v[1].toUpperCase(),v[2]];site[k]=()=>panel('USŁUGI TRANSPOMOC',v[1].toUpperCase(),'<div class="split"><div><p>'+v[2]+'</p><p>Telefonicznie ustalimy lokalizację, rodzaj awarii lub przewożonego ładunku i możliwość wykonania usługi.</p>'+btn(tel,'ZADZWOŃ '+phone+' ↗')+'</div>'+shot(3,'Pojazd przewożony na lawecie')+'</div>')+panel('INNE USŁUGI','SPRAWDŹ PEŁNĄ OFERTĘ.',regionCards(),'section-dark')+lead();}
for(const [fn,title,sub,txt] of articles){meta[fn]=[title.toUpperCase(),sub.toUpperCase(),'Poradnik TransPomoc'];site[fn]=()=>panel('BLOG / PORADNIKI',title.toUpperCase(),'<p class="article">'+txt+'</p><p class="fine">Materiał pokazowy do akceptacji właściciela.</p>'+btn('blog.html','← POWRÓT DO BLOGA'))+lead();}
site['realizacje.html']=site['galeria.html'];site['wypozyczalnia-lawet-poznan.html']=site['wynajem.html'];
const path=decodeURIComponent(location.pathname.split('/').pop()||'index.html');const selected=site[path]?path:'index.html',m=meta[selected]||meta['index.html'];
document.title=(m[1]||'TransPomoc')+' | TransPomoc';
const navs=nav.map(([u,t])=>a(u,t,selected===u?'selected':'')).join('');
const header='<div class="top"><div class="wrap"><span>● POMOC DROGOWA 24/7 • POZNAŃ I OKOLICE</span><span>A2 / S5 / S11 | POLSKA I EUROPA</span></div></div><header><div class="wrap nav">'+a('index.html','TRANS<b>POMOC</b><small>POMOC DROGOWA & TRANSPORT</small>','logo')+'<nav id="menu" aria-label="Menu główne">'+navs+'</nav>'+a(tel,'↗ '+phone,'outlinebtn')+'<button class="toggle" id="toggle" aria-label="Otwórz menu" aria-expanded="false">☰</button></div></header>';
const banner='<section class="hero small-hero"><div class="wrap herowrap">'+eyebrow(m[1])+'<h1>'+m[0]+'</h1><p>'+m[2]+'</p><div class="actions">'+btn(tel,'☎ ZADZWOŃ 24/7 ↗')+btn('kontakt.html','ZAPYTAJ O TRANSPORT ↗','ghost')+'</div></div></section>';
const footer='<footer><div class="wrap"><div class="footcols"><div>'+a('index.html','TRANS<b>POMOC</b>','logo')+'<p>Całodobowa pomoc drogowa, transport maszyn i wynajem lawet w Poznaniu, Polsce i Europie.</p></div><div><h4>ODKRYJ</h4>'+nav.map(([u,t])=>a(u,t)).join('')+'</div><div><h4>KONTAKT</h4>'+a(tel,phone)+a('mailto:'+email,email)+'<p>os. Powstań Narodowych 1/14<br>61-213 Poznań</p></div></div><div class="copyright">© 2026 TRANSPOMOC. WSZELKIE PRAWA ZASTRZEŻONE.</div></div></footer>'+a(tel,'☎ POMOC DROGOWA 24/7 — ZADZWOŃ','mobile');
document.getElementById('app').innerHTML=header+banner+site[selected]()+footer;
document.getElementById('toggle').addEventListener('click',e=>{const nav=document.getElementById('menu');let open=nav.classList.toggle('open');e.target.setAttribute('aria-expanded',String(open));});
if(selected==='galeria.html'){
  const grid=document.querySelector('.photo-grid');
  if(grid){
    const types=['maszyny','maszyny','maszyny','pojazdy','maszyny','pojazdy'];
    const list=[...grid.querySelectorAll('.photo-card')];
    list.forEach((el,i)=>{el.dataset.category=types[i]||'maszyny';el.setAttribute('aria-label','Powiększ zdjęcie '+(i+1));});
    const filters=document.createElement('div');filters.className='photo-filters';
    for(const [id,label] of [['all','WSZYSTKIE'],['maszyny','MASZYNY'],['pojazdy','POJAZDY']]){
      const b=document.createElement('button');b.type='button';b.textContent=label;b.dataset.filter=id;
      if(id==='all')b.classList.add('current');
      b.addEventListener('click',()=>{filters.querySelectorAll('button').forEach(x=>x.classList.toggle('current',x===b));list.forEach(el=>el.hidden=id!=='all'&&el.dataset.category!==id);});
      filters.append(b);
    }
    grid.before(filters);
    const overlay=document.createElement('div');overlay.className='photo-lightbox';
    overlay.setAttribute('role','dialog');overlay.setAttribute('aria-modal','true');
    overlay.innerHTML='<button type="button" aria-label="Zamknij podgląd">×</button><div class="enlarged"></div><p>Realizacja TransPomoc — fotografia z materiałów klienta</p>';
    document.body.append(overlay);
    function close(){overlay.classList.remove('visible');}
    overlay.querySelector('button').addEventListener('click',close);
    overlay.addEventListener('click',e=>{if(e.target===overlay)close();});
    document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
    list.forEach(el=>el.addEventListener('click',e=>{e.preventDefault();const shot=el.querySelector('.client-shot');overlay.querySelector('.enlarged').className='enlarged '+([...shot.classList].find(c=>/^photo[0-9]+$/.test(c))||'photo0');overlay.classList.add('visible');}));
  }
}
})();