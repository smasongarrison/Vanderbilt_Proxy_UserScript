// ==UserScript==
// @name Vanderbilt Auto Proxy Redirector
// @namespace https://github.com/smasongarrison/Vanderbilt_Proxy_UserScript/blob/master/VU%20AutoProxy%20Redirector.user.js
// @description Automatically redirect to the proxified equivalent as provided by Vanderbilt University. Adapted from UWA Auto EzProxy Redirector (https://greasyfork.org/scripts/9907-uwa-auto-ezproxy-redirector/)
// @version 0.2
// @license MIT
// @run-at document-start
// @grant none
// @updateURL: https://github.com/smasongarrison/Vanderbilt_Proxy_UserScript/raw/master/VU%20AutoProxy%20Redirector.user.js

// @exclude *.proxy.library.*.edu
// @match *://*.aacc.org/*
// @match *://*.aacr.org/*
// @match *://*.aacrjournals.org/*
// @match *://*.aacrmeetingabstracts.org/*
// @match *://*.aaiddjournals.org/*
// @match *://*.aanda.org/*
// @match *://*.aapm.org/*
// @match *://*.aappublications.org/*
// @match *://*.abc-clio.com/*
// @match *://*.abcb.gov.au/*
// @match *://*.abs.gov.au/*
// @match *://*.accessmedicine.com/*
// @match *://*.acm.org/*
// @match *://*.acrl.org/*
// @match *://*.acs.org/*
// @match *://*.acta.hu/*
// @match *://*.actahort.org/*
// @match *://*.actamathematica.org/*
// @match *://*.ada.org/*
// @match *://*.adtmag.com/*
// @match *://*.aeaweb.org/*
// @match *://*.afpe.org.uk/*
// @match *://*.african-archaeology.de/*
// @match *://*.agronomy.org/*
// @match *://*.agu.org/*
// @match *://*.ahajournals.org/*
// @match *://*.aiaa.org/*
// @match *://*.aip.org/*
// @match *://*.ajcn.org/*
// @match *://*.ajhg.org/*
// @match *://*.ajsonline.org/*
// @match *://*.ajtmh.org/*
// @match *://*.akademiai.com/*
// @match *://*.alexanderstreet.com/*
// @match *://*.allenpress.com/*
// @match *://*.alphamedpress.org/*
// @match *://*.amamanualofstyle.com/*
// @match *://*.ametsoc.org/*
// @match *://*.amjbot.org/*
// @match *://*.amjpathol.org/*
// @match *://*.ams.org/*
// @match *://*.anesthesiaprogress.org/*
// @match *://*.annallergy.org/*
// @match *://*.annals.org/*
// @match *://*.annee-philologique.com/*
// @match *://*.annualreviews.org/*
// @match *://*.anthrosource.net/*
// @match *://*.apa.org/*
// @match *://*.apc.org/*
// @match *://*.aps.org/*
// @match *://*.apsnet.org/*
// @match *://*.arabidopsis.org/*
// @match *://*.architecture.com/*
// @match *://*.artstor.org/*
// @match *://*.asabe.org/*
// @match *://*.asadl.org/*
// @match *://*.asbmb.org/*
// @match *://*.ascb.org/*
// @match *://*.ascelibrary.org/*
// @match *://*.ascpjournals.org/*
// @match *://*.asha.org/*
// @match *://*.ashspublications.org/*
// @match *://*.asia-studies.com/*
// @match *://*.asihcopeiaonline.org/*
// @match *://*.asip.org/*
// @match *://*.aslo.org/*
// @match *://*.asm.org/*
// @match *://*.asmedigitalcollection.asme.org/*
// @match *://*.asminternational.org/*
// @match *://*.asmjournals.org/*
// @match *://*.asn-online.org/*
// @match *://*.asnjournals.org/*
// @match *://*.aspectfinancial.com/*
// @match *://*.aspetjournals.org/*
// @match *://*.aspresolver.com/*
// @match *://*.astm.org/*
// @match *://*.astreetpress.com/*
// @match *://*.atilf.fr/*
// @match *://*.atsjournals.org/*
// @match *://*.atypon-link.com/*
// @match *://*.austlit.edu.au/*
// @match *://*.austms.org.au/*
// @match *://*.australianmusiccentre.com/*
// @match *://*.bcaillustrated.com/*
// @match *://*.bcdecker.com/*
// @match *://*.begellhouse.com/*
// @match *://*.benthamscience.com/*
// @match *://*.bepress.com/*
// @match *://*.biochemj.org/*
// @match *://*.biochemsoctrans.org/*
// @match *://*.biolbull.org/*
// @match *://*.biologists.com/*
// @match *://*.biologists.org/*
// @match *://*.biolreprod.org/*
// @match *://*.biomedcentral.com/*
// @match *://*.biophysj.org/*
// @match *://*.bioscientifica.com/*
// @match *://*.birjournals.org/*
// @match *://*.blackwell-synergy.com/*
// @match *://*.blackwellreference.com/*
// @match *://*.bloodjournal.org/*
// @match *://*.bmj.com/*
// @match *://*.bmjjournals.com/*
// @match *://*.brepolis.net/*
// @match *://*.brepols.net/*
// @match *://*.bridgemaneducation.com/*
// @match *://*.brillonline.nl/*
// @match *://*.businessnews.com/*
// @match *://*.butterworthsonline.com/*
// @match *://*.caaa.ca/*
// @match *://*.cababstractsplus.org/*
// @match *://*.cabdirect.org/*
// @match *://*.cabi.org/*
// @match *://*.cambridge.org/*
// @match *://*.cambridge.patron.eb20.com/*
// @match *://*.canmin.org/*
// @match *://*.ceda.com/*
// @match *://*.cefc.com/*
// @match *://*.cellbiolint.org/*
// @match *://*.cellpress.com/*
// @match *://*.chadwyck.co.uk/*
// @match *://*.chadwyck.com/*
// @match *://*.charlestonco.com/*
// @match *://*.chelonianjournals.org/*
// @match *://*.chemnetbase.com/*
// @match *://*.chicagomanualofstyle.org/*
// @match *://*.citiprogram.org/*
// @match *://*.classiques-garnier.com/*
// @match *://*.clinchem.org/*
// @match *://*.clinicalevidence.org/*
// @match *://*.clinicalkey.com/*
// @match *://*.cmaj.ca/*
// @match *://*.cms.math.ca/*
// @match *://*.comlaw.gov.au/*
// @match *://*.communicationencyclopedia.com/*
// @match *://*.computerworld.com/*
// @match *://*.connect4.com/*
// @match *://*.connectweb.com/*
// @match *://*.cortex-online.org/*
// @match *://*.crcnetbase.com/*
// @match *://*.credoreference.com/*
// @match *://*.cro3.org/*
// @match *://*.csa.com/*
// @match *://*.csa3.com/*
// @match *://*.cshlp.org/*
// @match *://*.csj.jp/*
// @match *://*.csu.edu.au/*
// @match *://*.current-reports.com/*
// @match *://*.datagold.com/*
// @match *://*.datamonitor.com/*
// @match *://*.datatrace.com/*
// @match *://*.dbpia.co.kr/*
// @match *://*.degruyter.com/*
// @match *://*.dental-update.co.uk/*
// @match *://*.dialogatsite.com/*
// @match *://*.dictionaryofeconomics.com/*
// @match *://*.digitaleditions.com/*
// @match *://*.doi.org/*
// @match *://*.dukejournals.org/*
// @match *://*.dukemathjournal.org/*
// @match *://*.dukeupress.edu/*
// @match *://*.e-enlightenment.com/*
// @match *://*.earthmagazine.org/*
// @match *://*.eastview.com/*
// @match *://*.ebmonline.org/*
// @match *://*.ebscohost.com/*
// @match *://*.economist.com/*
// @match *://*.edata-center.com/*
// @match *://*.editlib.org/*
// @match *://*.edpsciences.org/*
// @match *://*.edrs.com/*
// @match *://*.educause.edu/*
// @match *://*.ejbjs.org/*
// @match *://*.eje-online.org/*
// @match *://*.electrochem.org/*
// @match *://*.elgaronline.com/*
// @match *://*.emeraldinsight.com/*
// @match *://*.empire.amdigital.co.uk/*
// @match *://*.ems-ph.org/*
// @match *://*.endocrine.org/*
// @match *://*.endocrinology-journals.org/*
// @match *://*.engineeringvillage.com/*
// @match *://*.engnetbase.com/*
// @match *://*.envplan.com/*
// @match *://*.eolss.net/*
// @match *://*.epress.monash.edu/*
// @match *://*.equinoxpub.com/*
// @match *://*.erj.ersjournals.com/*
// @match *://*.erudit.org/*
// @match *://*.esajournals.org/*
// @match *://*.escj.org/*
// @match *://*.euppublishing.com/*
// @match *://*.europaworld.com/*
// @match *://*.europhysicsnews.org/*
// @match *://*.evolutionary-ecology.com/*
// @match *://*.exacteditions.com/*
// @match *://*.expertconsultbook.com/*
// @match *://*.factsandcomparisons.com/*
// @match *://*.fasebj.org/*
// @match *://*.finsia.com/*
// @match *://*.fq.math.ca/*
// @match *://*.fupress.net/*
// @match *://*.futuremedicine.com/*
// @match *://*.gendatabaseonline.com/*
// @match *://*.gender.amdigital.co.uk/*
// @match *://*.genetics.org/*
// @match *://*.geoscienceworld.org/*
// @match *://*.gerontologyjournals.org/*
// @match *://*.greenwood.com/*
// @match *://*.groundimprovement.com/*
// @match *://*.hartjournals.co.uk/*
// @match *://*.hbcpnetbase.com/*
// @match *://*.hcn.com/*
// @match *://*.hcn.net.au/*
// @match *://*.hematology.org/*
// @match *://*.heterocycles.jp/*
// @match *://*.hh.um.es/*
// @match *://*.hhpr.org/*
// @match *://*.hljournals.org/*
// @match *://*.hstalks.com/*
// @match *://*.hub.sciverse.com/*
// @match *://*.humanitiesebook.org/*
// @match *://*.i-law.com/*
// @match *://*.iaglr.org/*
// @match *://*.icevirtuallibrary.com/*
// @match *://*.ieee.org/*
// @match *://*.igi-global.com/*
// @match *://*.igi-online.com/*
// @match *://*.igpublish.com/*
// @match *://*.iias.asia/*
// @match *://*.iias.nl/*
// @match *://*.iijournals.com/*
// @match *://*.ijdb.ehu.es/*
// @match *://*.ijee.dit.ie/*
// @match *://*.ijocs.org/*
// @match *://*.imf.org/*
// @match *://*.imfareaer.org/*
// @match *://*.imfstatistics.org/*
// @match *://*.inderscienceonline.com/*
// @match *://*.indiaraj.amdigital.co.uk/*
// @match *://*.informahealthcare.com/*
// @match *://*.informaworld.com/*
// @match *://*.informit.com/*
// @match *://*.informs.org/*
// @match *://*.infosci-books.com/*
// @match *://*.ingentaconnect.com/*
// @match *://*.ingentaselect.com/*
// @match *://*.intlpress.com/*
// @match *://*.intmedpress.com/*
// @match *://*.iop.org/*
// @match *://*.iospress.com/*
// @match *://*.iovs.org/*
// @match *://*.ipasource.com/*
// @match *://*.ishib.org/*
// @match *://*.isiknowledge.com/*
// @match *://*.itergateway.org/*
// @match *://*.iucr.org/*
// @match *://*.iumj.indiana.edu/*
// @match *://*.iwaponline.com/*
// @match *://*.jabfp.org/*
// @match *://*.japmaonline.org/*
// @match *://*.jbc.org/*
// @match *://*.jbiconnectplus.org/*
// @match *://*.jbmronline.com/*
// @match *://*.jdentaled.org/*
// @match *://*.jem.org/*
// @match *://*.jhortscib.org/*
// @match *://*.jimmunol.org/*
// @match *://*.jleukbio.org/*
// @match *://*.jlr.org/*
// @match *://*.jmecology.com/*
// @match *://*.jnabs.org/*
// @match *://*.jneurosci.org/*
// @match *://*.jnrlse.org/*
// @match *://*.joannabriggs.edu.au/*
// @match *://*.jomms.org/*
// @match *://*.jopdentonline.org/*
// @match *://*.joponline.org/*
// @match *://*.jospt.org/*
// @match *://*.journalofanimalscience.org/*
// @match *://*.journalofgreenbuilding.com/*
// @match *://*.journalofphilosophy.org/*
// @match *://*.journals.uchicago.edu/*
// @match *://*.journalsleep.org/*
// @match *://*.jove.com/*
// @match *://*.jrheum.com/*
// @match *://*.jrheum.org/*
// @match *://*.jsad.com/*
// @match *://*.jstage.jst.go.jp/*
// @match *://*.jstor.org/*
// @match *://*.jultrasoundmed.org/*
// @match *://*.justcite.com/*
// @match *://*.justis.com/*
// @match *://*.kanopystreaming.com/*
// @match *://*.kappanmagazine.org/*
// @match *://*.karger.com/*
// @match *://*.kluwerarbitration.com/*
// @match *://*.kluwerlawonline.com/*
// @match *://*.kluweronline.com/*
// @match *://*.knovel.com/*
// @match *://*.labanimal.com/*
// @match *://*.law.usyd.edu.au/*
// @match *://*.lcoastpress.com/*
// @match *://*.lexisnexis.com/*
// @match *://*.lexxion.eu/*
// @match *://*.libraryedition.com/*
// @match *://*.liebertpub.com/*
// @match *://*.litencyc.com/*
// @match *://*.literatureencyclopedia.com/*
// @match *://*.londonlowlife.amdigital.co.uk/*
// @match *://*.lrb.co.uk/*
// @match *://*.lyellcollection.org/*
// @match *://*.macquariedictionary.com/*
// @match *://*.maneyjournals.org/*
// @match *://*.maneyonline.com/*
// @match *://*.math.uh.edu/*
// @match *://*.mathjournals.org/*
// @match *://*.mathnetbase.com/*
// @match *://*.mathscipub.org/*
// @match *://*.mcponline.org/*
// @match *://*.medicalevidencematters.com/*
// @match *://*.medici.tv/*
// @match *://*.medicinescomplete.com/*
// @match *://*.medphys.org/*
// @match *://*.mergentonline.com/*
// @match *://*.metapress.com/*
// @match *://*.mhmedical.com/*
// @match *://*.micromedexsolutions.com/*
// @match *://*.micronexx.com/*
// @match *://*.mimsonline.com/*
// @match *://*.minsocam.org/*
// @match *://*.mitpressjournals.org/*
// @match *://*.mja.com/*
// @match *://*.mlajournals.org/*
// @match *://*.monash.edu/*
// @match *://*.morganclaypool.com/*
// @match *://*.mrlonline.org/*
// @match *://*.msa.org.au/*
// @match *://*.museumoftheearth.org/*
// @match *://*.myilibrary.com/*
// @match *://*.nature.com/*
// @match *://*.naxosmusiclibrary.com/*
// @match *://*.naxosvideolibrary.com/*
// @match *://*.nber.org/*
// @match *://*.ncbi.nlm.nih.gov/*
// @match *://*.neilsonjournals.com/*
// @match *://*.nejm.org/*
// @match *://*.newleftreview.org/*
// @match *://*.nisc.com/*
// @match *://*.nowpublishers.com/*
// @match *://*.nrc-cnrc.ca/*
// @match *://*.nrcresearchpress.com/*
// @match *://*.nursingreview.com/*
// @match *://*.nutrition.org/*
// @match *://*.nybooks.com/*
// @match *://*.oceanalaw.com/*
// @match *://*.oclc.org/*
// @match *://*.oecd-ilibrary.org/*
// @match *://*.oecd-nea.org/*
// @match *://*.oecdobserver.org/*
// @match *://*.oed.com/*
// @match *://*.oldcitypublishing.com/*
// @match *://*.oldenbourg-link.com/*
// @match *://*.onarchitecture.com/*
// @match *://*.onemine.org/*
// @match *://*.onlinepublications.austroads.com/*
// @match *://*.openbookpublishers.com/*
// @match *://*.opticsinfobase.org/*
// @match *://*.opuluspress.se/*
// @match *://*.orchestralmusic.com/*
// @match *://*.ouplaw.com/*
// @match *://*.ovid.com/*
// @match *://*.oxford-auslawdictionary.com/*
// @match *://*.oxford-economichistory.com/*
// @match *://*.oxford-humanrights.com/*
// @match *://*.oxford-naswsocialwork.com/*
// @match *://*.oxford-theatreandperformance.com/*
// @match *://*.oxfordartonline.com/*
// @match *://*.oxfordbibliographies.com/*
// @match *://*.oxforddnb.com/*
// @match *://*.oxfordhandbooks.com/*
// @match *://*.oxfordjournals.org/*
// @match *://*.oxfordmusiconline.com/*
// @match *://*.oxfordreference.com/*
// @match *://*.oxfordscholarship.com/*
// @match *://*.oxfordwesternmusic.com/*
// @match *://*.pacificarchaeology.org/*
// @match *://*.palgrave-journals.com/*
// @match *://*.pan.pl/*
// @match *://*.pdcnet.org/*
// @match *://*.perceptionweb.com/*
// @match *://*.pharmacopoeia.co.uk/*
// @match *://*.phycologia.org/*
// @match *://*.physiology.org/*
// @match *://*.physsportsmed.com/*
// @match *://*.pidgeondigital.com/*
// @match *://*.pkulaw.cn/*
// @match *://*.plantcell.org/*
// @match *://*.plantphysiol.org/*
// @match *://*.pnas.org/*
// @match *://*.polymersdatabase.com/*
// @match *://*.portal.euromonitor.com/*
// @match *://*.portlandpress.com/*
// @match *://*.presidian.com/*
// @match *://*.press.uillinois.edu/*
// @match *://*.press.uiuc.edu/*
// @match *://*.proquest.com/*
// @match *://*.proteinscience.org/*
// @match *://*.psychiatrist.com/*
// @match *://*.psychiatryonline.org/*
// @match *://*.psychonomic-journals.org/*
// @match *://*.publichealthreports.org/*
// @match *://*.publish.csiro.au/*
// @match *://*.rangelands.org/*
// @match *://*.rbgkew.org.uk/*
// @match *://*.rcpsych.org/*
// @match *://*.rep.routledge.com/*
// @match *://*.reproduction-online.org/*
// @match *://*.researcherid.com/*
// @match *://*.revues.armand-colin.com/*
// @match *://*.riskwaters.com/*
// @match *://*.rockefeller.edu/*
// @match *://*.romanticism.amdigital.co.uk/*
// @match *://*.royalsociety.org/*
// @match *://*.rsc.org/*
// @match *://*.rsna.org/*
// @match *://*.rsnz.org/*
// @match *://*.rupress.org/*
// @match *://*.sabinet.co.za/*
// @match *://*.sagepub.com/*
// @match *://*.saiglobal.com/*
// @match *://*.sanbi.co.jp/*
// @match *://*.sauerlaender-verlag.com/*
// @match *://*.schattauer.de/*
// @match *://*.sciandmed.com/*
// @match *://*.sciencedirect.com/*
// @match *://*.sciencemag.org/*
// @match *://*.scientific.net/*
// @match *://*.scijournal.com/*
// @match *://*.sciquest.org.nz/*
// @match *://*.scopus.com/*
// @match *://*.serialssolutions.com/*
// @match *://*.sgm.ac.uk/*
// @match *://*.shancocksltd.co.uk/*
// @match *://*.siam.org/*
// @match *://*.sif.it/*
// @match *://*.sjmjournals.org/*
// @match *://*.sleepmedtext.com/*
// @match *://*.sloan-c.org/*
// @match *://*.sociologyencyclopedia.com/*
// @match *://*.sourceoecd.org/*
// @match *://*.spe.org/*
// @match *://*.spiedigitallibrary.org/*
// @match *://*.springer.com/*
// @match *://*.springer.de/*
// @match *://*.springerlink.com/*
// @match *://*.srmjournals.org/*
// @match *://*.ssr.org/*
// @match *://*.stat.sinica.edu.tw/*
// @match *://*.stata-journal.com/*
// @match *://*.statindex.org/*
// @match *://*.statistics.gov.uk/*
// @match *://*.surgeryjournal.co.uk/*
// @match *://*.tandfonline.com/*
// @match *://*.terrapub.co.jp/*
// @match *://*.the-aps.org/*
// @match *://*.theannals.com/*
// @match *://*.thelancet.com/*
// @match *://*.theshakespearerecords.com/*
// @match *://*.thomastelford.com/*
// @match *://*.thomsonreuters.com/*
// @match *://*.tlemea.com/*
// @match *://*.triangle.co.uk/*
// @match *://*.trrjournalonline.trb.org/*
// @match *://*.turpion.org/*
// @match *://*.ucpress.net/*
// @match *://*.umi.com/*
// @match *://*.universitypressscholarship.com/*
// @match *://*.update-software.com/*
// @match *://*.uwpress.org/*
// @match *://*.v-r.de/*
// @match *://*.victoriandatabase.com/*
// @match *://*.victorianperiodicals.com/*
// @match *://*.waspress.co.uk/*
// @match *://*.webofknowledge.com/*
// @match *://*.westlaw.com/*
// @match *://*.wiley.com/*
// @match *://*.withoutsanctuary.org/*
// @match *://*.witpress.com/*
// @match *://*.wkasiapacific.com/*
// @match *://*.worldbank.org/*
// @match *://*.worldscientific.com/*
// @match *://*.worldscinet.com/*
// @match *://*.worldshakesbib.org/*
// @match *://*.wspc.com.sg/*
// @match *://*.wssajournals.org/*
// @match *://aapgbulletin.datapages.com/*
// @match *://access.ovid.com/*
// @match *://accessengineeringlibrary.com/*
// @match *://advisor.lww.com/*
// @match *://agdevjournal.com/*
// @match *://aids-clinical-care.jwatch.org/*
// @match *://alatechsource.metapress.com/*
// @match *://alcts.metapress.com/*
// @match *://alzres.com/*
// @match *://annals.princeton.edu/*
// @match *://autoweb.rlg.org/*
// @match *://bmc.lib.umich.edu/*
// @match *://brepols.metapress.com/*
// @match *://ccforum.com/*
// @match *://cip.cornell.edu/*
// @match *://cognet.mit.edu/*
// @match *://digitallibrary.sae.org/*
// @match *://ecsdl.org/*
// @match *://eebo.chadwyck.com/*
// @match *://eureka.rlg.org/*
// @match *://f1000.com/*
// @match *://flm-journal.org/*
// @match *://genomebiology.com/*
// @match *://genomemedicine.com/*
// @match *://geo.arizona.edu/*
// @match *://GIDEONonline.net/*
// @match *://guilfordjournals.com/*
// @match *://heinonline.org/*
// @match *://henrystewart.metapress.com/*
// @match *://highwire.stanford.edu/*
// @match *://historicbrass.org/*
// @match *://hwwilsonweb.com/*
// @match *://iai.asm.org/*
// @match *://icsd.fiz-karlsruhe.de/*
// @match *://infotrac.galegroup.com/*
// @match *://jchemed.chem.wisc.edu/*
// @match *://jco.ascopubs.org/*
// @match *://jds.fass.org/*
// @match *://jep.textrum.com/*
// @match *://journal.nzma.org.nz/*
// @match *://journal.telospress.com/*
// @match *://journalofrheology.org/*
// @match *://journalsip.astm.org/*
// @match *://jrm.medicaljournals.se/*
// @match *://klapp-online.de/*
// @match *://leme.library.utoronto.ca/*
// @match *://librariesaustralia.nla.gov.au/*
// @match *://library.cqpress.com/*
// @match *://library.pressdisplay.com/*
// @match *://library.seg.org/*
// @match *://librarymusicsource.com/*
// @match *://llama.metapress.com/*
// @match *://lupjournals.org/*
// @match *://mcom.alexanderstreet.com/*
// @match *://msp.org/*
// @match *://muco.alexanderstreet.com/*
// @match *://multi-science.metapress.com/*
// @match *://muse.jhu.*
// @match *://my.lawlex.com/*
// @match *://nejm.highwire.org/*
// @match *://nijhoffonline.nl/*
// @match *://oversea.cnki.net/*
// @match *://periodicals.narr.de/*
// @match *://philpapers.org/*
// @match *://physicsworldarchive.iop.org/*
// @match *://pio.chadwyck.co.uk/*
// @match *://pjm.math.berkeley.edu/*
// @match *://poj.peeters-leuven.be/*
// @match *://projecteuclid.org/*
// @match *://ps.fass.org/*
// @match *://publishing.monash.edu/*
// @match *://quod.lib.umich.edu/*
// @match *://referenceworks.brillonline.com/*
// @match *://royalsocietypublishing.org/*
// @match *://sage-ereference.com/*
// @match *://sos.thieme.com/*
// @match *://spiedigitallibrary.aip.org/*
// @match *://spiedigitallibrary.org/*
// @match *://stemcellres.com/*
// @match *://stephanus.tlg.uci.edu/*
// @match *://thephilosophersmagazine.com/*
// @match *://tl2.idcpublishers.info/*
// @match *://tla.thomson.com/*
// @match *://transactionpub.metapress.com/*
// @match *://trb.metapress.com/*
// @match *://turf.lib.msu.edu/*
// @match *://universitypublishingonline.org/*
// @match *://untreaty.un.org/*
// @match *://utpjournals.metapress.com/*
// @match *://uwau.classical.com/*
// @match *://vnweb.hwwilsonweb.com/*
// @match *://webofknowledge.com/*
// @match *://wellesley.chadwyck.co.uk/*
// @match *://westlaw.com/*
// @match *://wileyonlinelibrary.com/*
// @match *://wlt.metapress.com/*
// @match *://worldcatlibraries.org/*
// @match *://www-thejns-net.org/*
// @match *://xroads.virginia.edu/*

// ==/UserScript==
if (window.self === window.top) {
  var new_url = window.location.href
  window.location.replace("http://proxy.library.vanderbilt.edu/login?url="+new_url);
  }

