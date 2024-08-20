import React from "react";
import swal from "sweetalert";
import { FaFacebook, FaInstagram, FaLinkedin, } from "react-icons/fa";
import { MdLocationOn, MdPhone } from "react-icons/md";
import { Manrope } from "next/font/google";

const font = Manrope({
  subsets: ["latin"]
})

const Footer = () => {
  const termsHeader = "Telif Hakları Hüküm ve Koşulları"
  const terms = "MAS Global Spółka z o.o. ve Atlantic Valley Markası web sitesinde yer alan her türlü metin, grafik, logo, resim, ses, animasyon, videolar ve diğer materyaller ('Site Materyalleri'), MAS Global Spółka z o.o. ve Atlantic Valley Markası tarafından telif hakkı koruması altındadır. Bu Site Materyalleri, MAS Global Spółka z o.o. ve Atlantic Valley Markası'nın önceden yazılı izni olmadan kullanılamaz, çoğaltılamaz, dağıtılamaz, değiştirilemez, yayınlanamaz, sergilenemez, satılamaz veya başka bir şekilde ticari amaçla kullanılamaz. MAS Global Spółka z o.o. ve Atlantic Valley Markası web sitesi ziyaretçileri, Site Materyallerini sadece kişisel, gayri ticari amaçlarla kullanabilirler. Site Materyallerini kopyalamadan önce, MAS Global Spółka z o.o. ve Atlantic Valley Markası'nın yazılı izni alınmalıdır. MAS Global Spółka z o.o. ve Atlantic Valley Markası web sitesinde yer alan herhangi bir Site Materyali, başka bir web sitesinde veya başka bir elektronik medyada kullanılamaz.Telif hakkı ihlali davranışları, MAS Global Spółka z o.o. ve Atlantic Valley Markası tarafından ciddiye alınacaktır ve hukuki işlemler başlatılabilir.MAS Global Spółka z o.o. ve Atlantic Valley Markası web sitesi, üçüncü taraf web sitelerine bağlantılar içerebilir. Bu web siteleri, MAS Global Spółka z o.o. ve Atlantic Valley Markası'nın kontrolü altında değildir ve MAS Global Spółka z o.o. ve Atlantic Valley Markası bu web sitelerinin içerikleri veya gizlilik politikaları hakkında hiçbir sorumluluk kabul etmez.MAS Global Spółka z o.o. ve Atlantic Valley Markası, bu Telif Hakları Hüküm ve Koşullarını değiştirme hakkını saklı tutar. Bu nedenle, MAS Global Spółka z o.o. ve Atlantic Valley Markası web sitesini ziyaret etmeden önce, bu metni tekrar okumanız önerilir.Bu Telif Hakları Hüküm ve Koşulları, MAS Global Spółka z o.o. ve Atlantic Valley Markası web sitesinin tüm kullanıcıları için geçerlidir. Herhangi bir soru veya endişeniz varsa, lütfen MAS Global Spółka z o.o. ve Atlantic Valley Markası'ya e-posta veya telefon yoluyla ulaşın."

  const Redirector = ({link, title}) => {
    return <a href={link} className={`${font.className}`}><li className="mb-2 hover:text-gray-400 text-slate-300">{title}</li></a>
  }

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-12" id="section_font">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full md:w-1/4 lg:w-1/5 px-4 mb-8">
          <h3 className="text-lg font-bold mb-4 underline underline-offset-4">Hakkımızda</h3>
          <ul className="list-reset">
            <Redirector link={"/who-we-are"} title={"Partnerlerimiz"}/>
            <Redirector link={"/referances"} title={"Referanslarımız"}/>
          </ul>
        </div>
        <div className="w-full md:w-1/4 lg:w-1/5 px-4 mb-8">
          <h3 className="text-lg font-bold underline underline-offset-4 mb-4">Endüstriler</h3>
            <ul className="list-reset">
              <Redirector link={"/industries/digitalmarketing"} title={"Dijital Pazarlama"}/>
              <Redirector link={"/industries/fmcg"} title={"Hızlı Tüketim Ürünleri"}/>
              <Redirector link={"industries/e-trade"} title={"E-Ticaret"}/>
              <Redirector link={"/industries/information-technology"} title={"Bilgi Teknolojileri"}/>
              <Redirector link={"/industries/energy"} title={"Enerji"}/>
            </ul>
        </div>
        <div className="w-full md:w-1/4 lg:w-1/5 px-4 mb-8">
          <h3 className="text-lg font-bold underline underline-offset-4 mb-4">Yatırım</h3>
          <ul className="list-reset">
              <Redirector link={"/investing"} title={"Avrupa'da Yatırım"}/>
              <Redirector link={"/incentive"} title={"Devlet Teşvikleri"}/>
          </ul>
        </div>
        <div className="w-full md:w-1/4 lg:w-1/5 px-4 mb-8">
          <h3 className="text-lg font-bold underline underline-offset-4 mb-4">İletişim</h3>
          <ul className="list-reset">
              <Redirector link={"/contact"} title={"Lokasyonlar"}/>
              <Redirector link={"/contact"} title={"İletişim Bilgileri"}/>
          </ul>
        </div>
        <div className="w-full md:w-1/4 lg:w-1/5 px-4 mb-8 justify-center items-center">
          <center>
          <img src={"https://i.postimg.cc/tgvwHKTM/Logo-Footer.png"} alt="Atlantic Valley" className="lg:w-full lg:h-auto md:w-full md:h-auto sm:w-full sm:h-auto h-36 w-auto " />
          <div className="mt-4 justify-center flex-wrap flex items-center">
            <strong href={"https://chatwith.io/s/mukanolcayto"} target="_blank" rel="noopener noreferrer" className=" flex items-center">
              <MdPhone size={28} className=" text-white" />
              <span className="text-white text-md pl-2 hover:text-white-900" id="section_font">+48 731 384 284</span>  
            </strong>
            <a href={"https://www.google.com/maps/@52.2190047,21.051371,13z"} target="_blank" rel="noopener noreferrer" className=" flex items-center pt-2">
              <MdLocationOn size={28} className=" text-white" />
              <span className="text-white text-md pl-2 hover:text-white-900" id="section_font">Marszalkowska 83</span>  
            </a>
            </div>

          <div className=" justify-between mt-12">
            <ul className="inline-flex gap-2">
              <li>
                  <FaLinkedin size={28} className="text-white transition-all duration-300 hover:text-slate-300"/>
              </li>
              <li>
                  <FaInstagram size={28} className="mx-1 text-white transition-all duration-300 hover:text-slate-300"/>
              </li>
              <li>
                <FaFacebook size={28} className="mx-1 text-white transition-all duration-300 hover:text-slate-300 "/>
              </li>
            </ul>
          </div>
          </center>
        </div> 
      </div>
      <center>
      <h2 className="text-slate-500 lg:text-sm md:text-sm sm:text-xs text-xs">
      ©{new Date().getFullYear()} Atlantic Valley & Partners
      Tüm Hakları Saklıdır | Bu Siteyi Ziyaret Ederek <strong className="text-slate-400 hover:text-white transition-all duration-300 cursor-pointer" onClick={() => {swal({title: termsHeader, text: terms})}}>Hüküm Ve Koşullar</strong>'ı Kabul Etmiş Olursunuz
      </h2>
      </center>
      </footer>
  );
}

export {Footer};
