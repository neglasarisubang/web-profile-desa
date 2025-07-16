import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import imgLogo from "../public/logo.png";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
    const [namaDesa, setNamaDesa] = useState("Neglasari");
    const [namaKecamatan, setNamaKecamatan] = useState("Neglasari");

    useEffect(() => {
        const storedNamaDesa = localStorage.getItem("namaDesa");
        if (storedNamaDesa) {
            setNamaDesa(storedNamaDesa);
        }

        const storedNamaKecamatan = localStorage.getItem("namaKecamatan");
        if (storedNamaKecamatan) {
            setNamaKecamatan(storedNamaKecamatan);
        }
    }, []);

    return (
        <>
            <style jsx>{`
                footer a:hover {
                    color: #0d6efd;
                    transition: all 1s ease;
                }
                .text-white-80 {
                    color: #d4d4d4;
                }
                .border-top-dark {
                    border-top: 1px solid #4141417c !important;
                }
                .text-15 {
                    font-size: 16px;
                }
                .bg-dark {
                    background-color: #171717 !important;
                }
            `}</style>

            <footer className="bg-dark text-white border-top-primary">
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-md-8 col-lg-4 my-2 my-md-0">
                            <h4>Tentang Web</h4>
                            <Image src={imgLogo} className="img-fluid mb-2" alt="image" height={100} width={100} />
                            <p className="text-white-80 text-15">
                                Website Resmi Rt19 Rw10 {namaDesa}, Kec. {namaKecamatan}, Kabupaten Subang, Jawa Barat. Media komunikasi dan transparansi Warga
                            </p>
                        </div>
                        <div className="col-md-6 col-lg-3 my-2 my-md-0">
                            <h5 className="mb-3">Kontak Desa</h5>
                            <ul className="list-unstyled text-white-80 text-decoration-none text-15">
                                <li className="my-2">
                                    <div className="d-flex">
                                        <i className="me-2"><FaMapMarkerAlt /></i>
                                        Jl. Raya {namaDesa} Kec. {namaKecamatan}, Subang, 41252
                                    </div>
                                </li>
                                <li className="my-2">
                                    <i className="me-2"><FaPhoneAlt /></i>
                                    083 815 432 987
                                </li>
                                <li className="my-2">
                                    <i className="me-2"><FaEnvelope /></i>
                                    admin@web.id
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-3 my-2 my-md-0">
                            <h5 className="mb-3">Kontak Penting</h5>
                            <ul className="list-unstyled text-white-80 text-decoration-none text-15">
                                <li className="my-2">Puskesmas - (0321) 876208</li>
                                <li className="my-2">Polsek - (0321) 861184</li>
                                <li className="my-2">Damkar - (0321) 854928</li>
                                <li className="my-2">PLN - 123</li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-2 my-2 my-md-0">
                            <h5 className="mb-3">Aplikasi Desa</h5>
                            <ul className="list-unstyled text-white-80 text-decoration-none text-15">
                                <li className="my-2">
                                    <Link href="/" legacyBehavior><a className="text-decoration-none text-white-80">Sistem Desa</a></Link>
                                </li>
                                <li className="my-2">
                                    <Link href="/" legacyBehavior><a className="text-decoration-none text-white-80">Pengaduan Online</a></Link>
                                </li>
                                <li className="my-2">
                                    <Link href="/" legacyBehavior><a className="text-decoration-none text-white-80">Pengajuan Surat</a></Link>
                                </li>
                                <li className="my-2">
                                    <Link href="/" legacyBehavior><a className="text-decoration-none text-white-80">Info Kesehatan</a></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row pt-3 pb-md-0 mt-4 border-top-dark">
                        <div className="col-md-8 text-center text-md-start text-15">
                            <p className="text-white-80">
                                Copyright © <Link href="#" legacyBehavior><a className="text-decoration-none text-white-80">Kp Cikuya {namaDesa}</a></Link>. All rights reserved
                            </p>
                        </div>
                        <div className="col-md-4 mb-3 text-center text-md-end ">
                            <a href="https://web.facebook.com/" className="mx-2 text-white-80" aria-label="Facebook" rel="noreferrer" target="_blank">
                                <FaFacebook />
                            </a>
                            <a href="https://twitter.com/" className="mx-2 text-white-80" aria-label="Twitter" rel="noreferrer" target="_blank">
                                <FaTwitter />
                            </a>
                            <a href="https://www.youtube.com/" className="mx-2 text-white-80" aria-label="Youtube" rel="noreferrer" target="_blank">
                                <FaYoutube />
                            </a>
                            <a href="https://www.instagram.com/" className="mx-2 text-white-80" aria-label="Instagram" rel="noreferrer" target="_blank">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
