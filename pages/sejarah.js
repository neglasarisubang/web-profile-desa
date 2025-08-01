import { useEffect, useState } from "react";
import Head from "next/head";
import NavBarTop from "../components/NavBarTop";
import Footer from "../components/Footer";
import BreadcrumbArea from "../components/BreadcrumbArea";
import Image from "next/image";
import BackToTop from "../components/BackToTop";

const title = "Sejarah";

export default function Sejarah() {
    const [namaDesa, setNamaDesa] = useState("");
    const [namaKecamatan, setNamaKecamatan] = useState("");
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true); // Menandakan bahwa sudah berada di sisi client
        const storedNamaDesa = localStorage.getItem("namaDesa");
        if (storedNamaDesa) setNamaDesa(storedNamaDesa);

        const storedNamaKecamatan = localStorage.getItem("namaKecamatan");
        if (storedNamaKecamatan) setNamaKecamatan(storedNamaKecamatan);
    }, []);

    return (
        <>
            <style jsx>{`
                .maps {
                    height: 450px;
                }
            `}</style>

            <Head>
                <title>{title}</title>
                <meta name="description" content={`Website Desa ${namaDesa || "Desa"}`} />
                <meta property="og:title" content={`Situs Resmi Desa ${namaDesa || "Desa"}`} />
                <meta property="og:description" content={`Website Resmi Desa ${namaDesa || "Desa"}. Media komunikasi dan transparansi Pemerintah Desa`} />
                <meta property="og:image" content={`${process.env.NEXT_PUBLIC_API_URL}/metalogo.jpg`} />
            </Head>

            <NavBarTop />

            <main>

                <BreadcrumbArea pageName="Sejarah Singkat" currentPage="Sejarah"/>

                <div className="container my-5">
                    <div className="col-lg-10 mx-auto">
                        <div className="card bg-card-primary border-0 shadow-sm px-3 py-3 mb-4">
                            <h3 className="text-color-primary">Sejarah Singkat</h3>
                            <Image 
                            src="/hero.webp"
                            alt="Foto Desa" 
                            className="img-fluid rounded my-3"/>
                            <h5 className="mt-4 text-color-primary">Uraian Singkat Profil Desa</h5>
                            <p className="text-color-secondary">Desa {namaDesa} merupakan Desa yang terletak di dataran rendah
                                yang sebelah selatannya terdapat Selat Madura, tinggi dari permukaan Pantai yaitu 2 M.
                                Selain
                                itu Desa {namaDesa} memiliki Luas 113,48 Ha. Jarak tempuh dari Desa menuju Kantor Kecamatan
                                yaitu 2 KM.
                                Desa {namaDesa} terdiri dari 7 dusun, 7 RW dan 32 Rt dengan jumlah penduduk sebanyak 6.506
                                Jiwa,
                                dengan rincian Laki-laki 3.178 jiwa dan perempuan 3.328 jiwa.</p>
                            <p className="text-color-secondary">{namaDesa} adalah salah satu Desa yang terletak di wilayah
                                Kecamatan {namaKecamatan}, Kabupaten Bangkalan, Provinsi Jawa
                                Timur, Indonesia. Desa alang-alang adalah Desa pintar pertama yang ada di Kabupaten
                                Bangkalan Dengan nama Smart
                                Village.</p>
                        </div>
                        <div className="card bg-card-primary border-0 shadow-sm px-3 py-3 mb-4">
                            <h3 className="text-color-primary">Peta Desa</h3>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5634240142444!2d107.79720019999999!3d-6.4500519999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6939bd85cad98f%3A0x275bcf66db2f3763!2sCandil%20Kuya%20-%20Jasa%20Website!5e0!3m2!1sid!2sid!4v1752641501432!5m2!1sid!2sid"
                                className="rounded mt-3 maps" allowFullScreen="" title="Peta Desa"
                                loading="lazy"></iframe>
                        </div>
                        <div className="card bg-card-primary border-0 shadow-sm px-3 py-3 mb-4">
                            <h3 className="text-color-primary">Peta Geospatial</h3>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4703.012346725019!2d107.79720019999999!3d-6.450051999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6939bd85cad98f%3A0x275bcf66db2f3763!2sCandil%20Kuya%20-%20Jasa%20Website!5e1!3m2!1sid!2sid!4v1752641711189!5m2!1sid!2sid"
                                className="rounded mt-3 maps" allowFullScreen="" title="Peta Geospatial"
                                loading="lazy"></iframe>
                        </div>
				    </div>
                </div>

            </main>

            <Footer />

            <BackToTop />
        </>
    );
};

// This gets called on every request to this page
// export async function getServerSideProps() {
//     const getAllPosts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/post`);
//     const posts = await getAllPosts.json();
//     return {
//         props: { posts }, // will be passed to the page component as props
//     };
// };