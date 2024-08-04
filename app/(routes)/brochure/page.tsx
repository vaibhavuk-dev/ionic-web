import WaterflowComponent from "@/components/homepage/WaterflowComponent ";
import NavBar from "@/components/NavBar";

export default function BrochurePage() {

    return (
        <div>
            {/* <NavBar shouldWhite={true} /> */}

            <div className="bg-blueb-700 mt-[90px] py-6 px-32 flex items-center gap-3">
                <img className="h-10" src="/icons/arrow-small-left.svg" alt="" />
                <h1 className="text-3xl font-semibold text-white">Brochure</h1>
            </div>

            
            <WaterflowComponent />

            <div className="px-32 py-10">
                <p className="text-xl font-semibold">Brochure</p>
                <div className="grid grid-cols-5 gap-5">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(() => (
                        <div className="mt-5 w-fit flex flex-col gap-3 items-center">
                            <img className="h-60 w-fit rounded-xl" src="/brochure.png" />
                            <p>Download (PDF)</p>
                        </div>
                    ))}
                </div>
            </div>

            <div id="componentlayout216333" className="hydrocontainer ">
                <div id="componentlayout216334" className="hydrohead ">
                    <div id="componentlayout216335" className="col-lg-offset-2 col-lg-10 col-md-offset-2 col-md-10 col-sm-12 col-xs-12 nopadleft">
                        <div id="componentlayout216336" className="hydrotext ">
                            <p>We Remove Everything from Water <b>Except - “Hydrogen &amp; Oxygen”</b></p>
                        </div>
                    </div>
                </div>
                <div id="componentlayout216337" className="hydroprocess ">
                    <div id="componentlayout216338" className="col-lg-2 col-md-2 hidden-sm hidden-xs nopadleft ">
                        <div id="componentlayout216339" className="processsmoke ">
                            <p><img className="img-responsive" alt="IONIC PROCESS" src="/uploads/ionic/ionicsmoke.png"/></p>
                        </div>
                    </div>
                    <div id="componentlayout216340" className="col-lg-2 col-md-2 hidden-sm hidden-xs custodivfirst custodiv" data-wow-delay="0.8s" data-wow-duration="2s">
                        <div id="componentlayout216341" className="process1 ">
                            <p><img className="img-responsive" alt="IONIC OIL &amp; GASES" src="/uploads/ionic/ionicoil.png"/></p>
                            <p>OIL &amp; GASES</p>
                        </div>
                    </div>
                    <div id="componentlayout216342" className="col-lg-2 col-md-2 hidden-sm hidden-xs custodiv " data-wow-delay="0.85s" data-wow-duration="2s">
                        <div id="componentlayout216343" className="process1 ">
                            <p><img className="img-responsive" alt="IONIC Gaseous Impurities" src="/uploads/ionic/ionicgaseous.png"/></p>
                            <p>gaseous impurities</p>
                        </div>
                    </div>
                    <div id="componentlayout216344" className="col-lg-2 col-md-2 hidden-sm hidden-xs custodiv " data-wow-delay="0.9s" data-wow-duration="2s">
                        <div id="componentlayout216345" className="process1 ">
                            <p><img className="img-responsive" alt="IONIC Biological Impurities" src="/uploads/ionic/ionicbiological.png"/></p>
                            <p>biological impurities</p>
                        </div>
                    </div>
                    <div id="componentlayout216346" className="col-lg-2 col-md-2 hidden-sm hidden-xs custodiv " data-wow-delay="0.95s" data-wow-duration="2s">
                        <div id="componentlayout216347" className="process1 ">
                            <p><img src="/uploads/ionic/ionictoxic.png" alt="IONIC Toxic Chemicals" className="img-responsive"/></p>
                            <p>toxic chemicals</p>
                        </div>
                    </div>
                    <div id="componentlayout216348" className="col-lg-2 col-md-2 hidden-sm hidden-xs custolastdiv custodiv" data-wow-delay="1s" data-wow-duration="2s">
                        <div id="componentlayout216349" className="process1 ">
                            <p><img src="/uploads/ionic/ionicphysical.png" alt="IONIC Physical Impurities" className="img-responsive"/></p>
                            <p>physical impurities</p>
                        </div>
                    </div>
                </div>
                <div id="componentlayout216350" className="hydroprocess1 ">
                    <div id="componentlayout216351" className="col-lg-offset-2 col-lg-2 col-md-2 hidden-sm hidden-xs custolastdiv1  custodiv1">
                        <div id="componentlayout216352" className="process2 ">
                            <p><img className="img-responsive" alt="IONIC Silica" src="/uploads/ionic/ionicsilica.png"/></p>
                            <p>Silica</p>
                        </div>
                    </div>
                    <div id="componentlayout216353" className="col-lg-2 col-md-2 hidden-sm hidden-xs custodiv1 ">
                        <div id="componentlayout216354" className="process2 ">
                            <p><img className="img-responsive" alt="IONIC Heavy Metals" src="/uploads/ionic/ionicheavymetals.png"/></p>
                            <p>Heavy Metals</p>
                        </div>
                    </div>
                    <div id="componentlayout216355" className="col-lg-2 col-md-2 hidden-sm hidden-xs custodiv1 ">
                        <div id="componentlayout216356" className="process2 ">
                            <p><img className="img-responsive" alt="IONIC Organic Impurities" src="/uploads/ionic/ionicorganic.png"/></p>
                            <p>Organic Impurities</p>
                        </div>
                    </div>
                    <div id="componentlayout216357" className="col-lg-2 col-md-2 hidden-sm hidden-xs custodiv1 ">
                        <div id="componentlayout216358" className="process2 ">
                            <p><img className="img-responsive" alt="IONIC Inorganic Impurities" src="/uploads/ionic/ionicinorganic.png"/></p>
                            <p>inorganic Impurities</p>
                        </div>
                    </div>
                    <div id="componentlayout216359" className="col-lg-3 col-md-3 hidden-sm hidden-xs nopadleft ">
                        <div id="componentlayout216360" className="processwater ">
                            <p><img className="img-responsive" alt="IONIC PROCESS" src="/uploads/ionic/ionicwaterflow1.png"/></p>
                        </div>
                    </div>
                </div>
                <div id="componentlayout217265" className="ionicwaterflow ">
                    <p><video className="bannervideo">   <source className="hrimage1" type="video/mp4" src="/uploads/ionic/ionicvideos1.MP4"/> </video></p>
                </div>
            </div>
        </div>
    )
}