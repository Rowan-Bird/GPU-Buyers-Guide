(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{389:function(t,e,a){"use strict";a.r(e);var i=a(25),r=Object(i.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"nvidia-gpus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nvidia-gpus"}},[t._v("#")]),t._v(" Nvidia GPUs")]),t._v(" "),a("h2",{attrs:{id:"native-nvidia-gpus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#native-nvidia-gpus"}},[t._v("#")]),t._v(" Native nVidia GPUs")]),t._v(" "),a("h3",{attrs:{id:"kepler-series-gtx-6xx-7xx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kepler-series-gtx-6xx-7xx"}},[t._v("#")]),t._v(" "),a("strong",[t._v("Kepler Series (GTX 6xx, 7xx)")])]),t._v(" "),a("h4",{attrs:{id:"highest-supported-os-current-big-sur"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#highest-supported-os-current-big-sur"}},[t._v("#")]),t._v(" Highest Supported OS: Current/Big Sur")]),t._v(" "),a("p",[t._v("Currently the only 100% native Nvidia architecture that works with Catalina. Users have reported issues with the GTX 650Ti, 660, 660ti but this is caused by a driver issue on Apple’s end by not supporting the GK106 core(or quite poorly as the issue seems to be memory leakage which also affects real Macs). Another issue with this generation is lower end products marketed as first generation Kepler are actually using a Fermi core but have identical counterparts running Kepler cores as well(GF 116 vs GK 107 found in the GT 640). "),a("strong",[t._v("AND PLEASE NOTICE THAT GTX 745, 750 and ti VARIANTS ARE NOT INCLUDED, THEY'RE NOT KEPLER")])]),t._v(" "),a("p",[t._v("Also keep in mind that the following systems have a kepler GPU meaning that support will likely stay until all pre-Skylake hardware is dropped(so anything without USB-C):")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("SMBIOS")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("GPU")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Initial Release")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Discontinued")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("iMac13,1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("GT 640M")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("October 23, 2012")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("June 18, 2014")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("iMac13,2")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("GT 660M")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("October 23, 2012")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("September 24, 2013")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("iMac14,1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("GT 750M")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("September 24, 2013")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("October 13, 2015")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("iMac14,2")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("GT 755M")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("September 24, 2013")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("October 13, 2015")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("MacBookPro9,1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("GT 650M")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("June 11, 2012")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("October 22, 2013")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("MacBookPro10,1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("GT 650M")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("June 11, 2012")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("October 22, 2013")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("MacBookPro11,3")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("GT 750M")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("October 22, 2013")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("May 19, 2015")])])])]),t._v(" "),a("p",[t._v("Supported cards:")]),t._v(" "),a("p",[t._v("Kepler Gen 2:")]),t._v(" "),a("ul",[a("li",[t._v("GTX Titan (GK 110 Maxwell core)")]),t._v(" "),a("li",[t._v("GTX Titan Black(GK 110 Maxwell core)")]),t._v(" "),a("li",[t._v("GTX Titan Z (One of the few dual GPU cards supported in MacOs)")]),t._v(" "),a("li",[t._v("GTX 780 Ti")]),t._v(" "),a("li",[t._v("GTX 780")]),t._v(" "),a("li",[t._v("GTX 770")]),t._v(" "),a("li",[t._v("GTX 760 Ti")]),t._v(" "),a("li",[t._v("GTX 760")]),t._v(" "),a("li",[t._v("GT 740")]),t._v(" "),a("li",[t._v("GT 730(GK208 variant)")]),t._v(" "),a("li",[t._v("GT 720")]),t._v(" "),a("li",[t._v("GT 710(GK208 variant)")])]),t._v(" "),a("p",[t._v("Kepler Gen 1:")]),t._v(" "),a("ul",[a("li",[t._v("GTX 690(Another dual GPU card compatible with macOS)")]),t._v(" "),a("li",[t._v("GTX 680")]),t._v(" "),a("li",[t._v("GTX 670")]),t._v(" "),a("li",[t._v("GTX 660 Ti")]),t._v(" "),a("li",[t._v("GTX 660(MUST BE RUNNING A GK 104 core, NOT GK 106)")]),t._v(" "),a("li",[t._v("GTX 650(GK 107 core)")]),t._v(" "),a("li",[t._v("GT 640(Kepler edition, GK 107/208 core)")]),t._v(" "),a("li",[t._v("GT 630(Kepler edition, GK 107/208 core)")])]),t._v(" "),a("p",[t._v("Quadro:")]),t._v(" "),a("ul",[a("li",[t._v("Quadro K6000")]),t._v(" "),a("li",[t._v("Quadro K5200")]),t._v(" "),a("li",[t._v("Quadro K5000")]),t._v(" "),a("li",[t._v("Quadro K4200")]),t._v(" "),a("li",[t._v("Quadro K2000D")]),t._v(" "),a("li",[t._v("Quadro K2000")]),t._v(" "),a("li",[t._v("Quadro K600")]),t._v(" "),a("li",[t._v("Quadro K420")]),t._v(" "),a("li",[t._v("Quadro 410")]),t._v(" "),a("li",[t._v("NVS 510")])]),t._v(" "),a("p",[t._v("Needed kexts:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/acidanthera/Lilu/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lilu.kext"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/acidanthera/WhateverGreen/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("WhateverGreen.kext"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("Extras:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("shikigva=40")]),t._v(" boot flag: Swaps boardID to iMac14,2 for better Nvidia Support and whitelists patches")])]),t._v(" "),a("h2",{attrs:{id:"unsupported-nvidia-gpus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unsupported-nvidia-gpus"}},[t._v("#")]),t._v(" Unsupported nVidia GPUs")]),t._v(" "),a("h3",{attrs:{id:"turing-series-rtx-20xx-gtx-16xx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#turing-series-rtx-20xx-gtx-16xx"}},[t._v("#")]),t._v(" "),a("strong",[t._v("Turing Series (RTX 20xx, GTX 16xx)")])]),t._v(" "),a("h4",{attrs:{id:"highest-supported-os-none"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#highest-supported-os-none"}},[t._v("#")]),t._v(" Highest Supported OS:NONE")]),t._v(" "),a("p",[t._v("Unfortunatel no support in any version of macOS as no drivers were ever written even for High Sierra. Not much else to add.")]),t._v(" "),a("p",[t._v("These cards include:")]),t._v(" "),a("ul",[a("li",[t._v("Titan RTX")]),t._v(" "),a("li",[t._v("RTX 2080 Ti")]),t._v(" "),a("li",[t._v("RTX 2080 Super")]),t._v(" "),a("li",[t._v("RTX 2080")]),t._v(" "),a("li",[t._v("RTX 2070 Super")]),t._v(" "),a("li",[t._v("RTX 2070")]),t._v(" "),a("li",[t._v("RTX 2060 Super")]),t._v(" "),a("li",[t._v("RTX 2060")]),t._v(" "),a("li",[t._v("GTX 1660 Ti")]),t._v(" "),a("li",[t._v("GTX 1660")]),t._v(" "),a("li",[t._v("GTX 1650")])]),t._v(" "),a("p",[t._v("Quadro:")]),t._v(" "),a("ul",[a("li",[t._v("Quadro RTX 8000")]),t._v(" "),a("li",[t._v("Quadro RTX 6000")]),t._v(" "),a("li",[t._v("Quadro RTX 5000")]),t._v(" "),a("li",[t._v("Quadro RTX 4000")])]),t._v(" "),a("p",[a("strong",[t._v("Volta Series Highest Supported OS:NONE")])]),t._v(" "),a("p",[t._v("The same idea as Turing, no drivers were ever written")]),t._v(" "),a("p",[t._v("These cards include:")]),t._v(" "),a("ul",[a("li",[t._v("Titan V")]),t._v(" "),a("li",[t._v("Titan V CEO Edition")])]),t._v(" "),a("p",[t._v("Quadro:")]),t._v(" "),a("ul",[a("li",[t._v("Quadro GV100")])]),t._v(" "),a("h3",{attrs:{id:"kepler-series-gk-106-variants"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kepler-series-gk-106-variants"}},[t._v("#")]),t._v(" "),a("strong",[t._v("Kepler Series(GK 106 Variants)")])]),t._v(" "),a("p",[t._v("GPUs running the GK 106 core have the unfortunate concequene of having a serious issue regarding VRAM leakage. This means that there's a high chance of disotrion and overall instabilty when running these GPUs which unfortuanty have no real solution as even installing web drivers has no affect. A list of GPUs with this core can be found "),a("a",{attrs:{href:"https://www.techpowerup.com/gpu-specs/nvidia-gk106.g186",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Second generation Kepler:")]),t._v(" "),a("ul",[a("li",[t._v("GT 740")])]),t._v(" "),a("p",[t._v("First generation Kepler:")]),t._v(" "),a("ul",[a("li",[t._v("GTX 660")]),t._v(" "),a("li",[t._v("GTX 650 Ti")]),t._v(" "),a("li",[t._v("GTX 650")]),t._v(" "),a("li",[t._v("GTX 645")])]),t._v(" "),a("p",[t._v("Quadro:")]),t._v(" "),a("ul",[a("li",[t._v("K4000")])]),t._v(" "),a("h3",{attrs:{id:"fermi-rebranded-gf108-gf117-and-gf119"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fermi-rebranded-gf108-gf117-and-gf119"}},[t._v("#")]),t._v(" "),a("strong",[t._v("Fermi rebranded(GF108, GF117 and GF119)")])]),t._v(" "),a("p",[t._v("Well of course Nvidia can't keep naming straight, some")]),t._v(" "),a("ul",[a("li",[t._v("GT 730(GF108 variant)")]),t._v(" "),a("li",[t._v("GT 720A")]),t._v(" "),a("li",[t._v("GT 710(GF119 variant)")]),t._v(" "),a("li",[t._v("GT 705")]),t._v(" "),a("li",[t._v("GT 640(GF108 and GF116)")]),t._v(" "),a("li",[t._v("GT 630(GF108 variant)")]),t._v(" "),a("li",[t._v("GT 620")]),t._v(" "),a("li",[t._v("GT 610")])]),t._v(" "),a("h3",{attrs:{id:"pascal-series-gtx-10xx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pascal-series-gtx-10xx"}},[t._v("#")]),t._v(" "),a("strong",[t._v("Pascal Series (GTX 10xx)")])]),t._v(" "),a("h4",{attrs:{id:"highest-supported-os-high-sierra-10-13-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#highest-supported-os-high-sierra-10-13-6"}},[t._v("#")]),t._v(" Highest Supported OS: High Sierra 10.13.6")]),t._v(" "),a("p",[t._v("Well pretty sure most users know what going on with Pascal and Maxwell but I’ll just mention it quickly here. No support for these cards in Mojave/Catalina but macOS High Sierra 10.13.6 do support these cards with the combination of Nvidia’s somewhat shotty drivers and Lilu+WhateverGreen")]),t._v(" "),a("p",[t._v("Supported cards:")]),t._v(" "),a("ul",[a("li",[t._v("GTX Titan X(GP 102-400 Pascal core)")]),t._v(" "),a("li",[t._v("GTX Titan Xp(GP 102-450 Pascal core)")]),t._v(" "),a("li",[t._v("GTX 1080 Ti")]),t._v(" "),a("li",[t._v("GTX 1080")]),t._v(" "),a("li",[t._v("GTX 1070 Ti")]),t._v(" "),a("li",[t._v("GTX 1070")]),t._v(" "),a("li",[t._v("GTX 1060( "),a("strong",[t._v("Note")]),t._v(" that GP104/GDDR5X variants are not supported by the web drivers)")]),t._v(" "),a("li",[t._v("GTX 1050 Ti")]),t._v(" "),a("li",[t._v("GTX 1050")]),t._v(" "),a("li",[t._v("GT 1030")])]),t._v(" "),a("p",[t._v("Quadro:")]),t._v(" "),a("ul",[a("li",[t._v("Quadro GP100")]),t._v(" "),a("li",[t._v("Quadro P6000")]),t._v(" "),a("li",[t._v("Quadro P5000")]),t._v(" "),a("li",[t._v("Quadro P4000")]),t._v(" "),a("li",[t._v("Quadro P2000")]),t._v(" "),a("li",[t._v("Quadro P1000")]),t._v(" "),a("li",[t._v("Quadro P620")]),t._v(" "),a("li",[t._v("Quadro P600")]),t._v(" "),a("li",[t._v("Quadro P400")])]),t._v(" "),a("p",[t._v("Needed kexts:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.nvidia.com/download/driverResults.aspx/125379/en-us",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nvidia’s Web drivers"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/acidanthera/Lilu/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lilu.kext"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/acidanthera/WhateverGreen/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("WhateverGreen.kext"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("Extras:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("shikigva=40")]),t._v(" boot flag: Swaps boardID to iMac14,2 for better Nvidia Support and whitelists patches")]),t._v(" "),a("li",[t._v("NvidiaWeb property: Forces "),a("code",[t._v("nvda_drv=1")]),t._v(" on each boot, required for systems with non-native NVRAM(EmuVariableUEFI)")])]),t._v(" "),a("h3",{attrs:{id:"maxwell-series-gtx-9xx-745-750-ti"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maxwell-series-gtx-9xx-745-750-ti"}},[t._v("#")]),t._v(" "),a("strong",[t._v("Maxwell Series (GTX 9xx, 745, 750/ti)")])]),t._v(" "),a("h4",{attrs:{id:"highest-supported-os-high-sierra-10-13-6-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#highest-supported-os-high-sierra-10-13-6-2"}},[t._v("#")]),t._v(" Highest Supported OS: High Sierra 10.13.6")]),t._v(" "),a("p",[t._v("Same idea as Pascal, though the naming scheme is a bit odd as the GTX 745, 750 and 750ti are all Maxwell based even though they’re being marketed with the Kepler line so be wary when buying")]),t._v(" "),a("p",[t._v("Supported cards:")]),t._v(" "),a("ul",[a("li",[t._v("GTX Titan X(GM 200 Maxwell core)")]),t._v(" "),a("li",[t._v("GTX 980 Ti")]),t._v(" "),a("li",[t._v("GTX 980")]),t._v(" "),a("li",[t._v("GTX 970")]),t._v(" "),a("li",[t._v("GTX 960")]),t._v(" "),a("li",[t._v("GTX 950")]),t._v(" "),a("li",[t._v("GTX 750 Ti")]),t._v(" "),a("li",[t._v("GTX 750")]),t._v(" "),a("li",[t._v("GTX 745")])]),t._v(" "),a("p",[t._v("Quadro:")]),t._v(" "),a("ul",[a("li",[t._v("Quadro M6000")]),t._v(" "),a("li",[t._v("Quadro M5000")]),t._v(" "),a("li",[t._v("Quadro M4000")]),t._v(" "),a("li",[t._v("Quadro M2000")]),t._v(" "),a("li",[t._v("Quadro K220")]),t._v(" "),a("li",[t._v("Quadro K1200")]),t._v(" "),a("li",[t._v("Quadro K620")])]),t._v(" "),a("p",[t._v("Needed kexts:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.nvidia.com/download/driverResults.aspx/125379/en-us",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nvidia’s Web drivers"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/acidanthera/Lilu/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lilu.kext"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/acidanthera/WhateverGreen/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("WhateverGreen.kext"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("Extras:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("shikigva=40")]),t._v(" boot flag: Swaps boardID to iMac14,2 for better Nvidia Support and whitelists patches")]),t._v(" "),a("li",[t._v("NvidiaWeb property: Forces "),a("code",[t._v("nvda_drv=1")]),t._v(" on each boot, required for systems with non-native NVRAM(EmuVariableUEFI)")])])])}),[],!1,null,null,null);e.default=r.exports}}]);