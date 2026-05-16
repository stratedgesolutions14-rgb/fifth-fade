import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function JoinCourse() {
    return (
        <section className="w-full bg-background py-10">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-8 lg:grid-cols-2">

                    {/* LEFT SIDE */}
                    <div>
                        <h2 className="text-3xl gap-2 font-black uppercase leading-tight text-secondary sm:text-4xl xl:text-5xl lg:text-4xl">
                            Music Production Course In{" "}
                            <span className="text-primary">90 Days</span>
                        </h2>

                        <p className="mt-4 text-sm uppercase tracking-[0.2em] leading-7 text-muted-foreground">
                            Bridge the gap between amateur demos and professional masters.
                        </p>

                        <Button
                            variant="secondary"
                            size="lg"
                            asChild
                            className="mt-6 w-full gap-2 sm:w-auto"
                        >
                            <Link href="/contact">
                                Enroll Now
                                <ArrowRight className="size-4" aria-hidden />
                            </Link>
                        </Button>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="overflow-hidden rounded-2xl">
                        <Image
                            src="/images/course.jpeg"
                            alt="Music Production Course"
                            width={600}
                            height={500}
                            className="h-[400px] w-full object-cover"
                            priority
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}


// import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";
// import Link from "next/link";



// export default function JoinCourse() {
//     return (
//         <>
//             <section className="w-full bg-background py-10">
//                 <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
//                     <div className="grid items-center gap-8 lg:grid-cols-2">

//                         {/* LEFT SIDE */}
//                         <div>
//                             <h2 className="text-3xl  gap-2 font-black uppercase leading-tight text-secondary sm:text-4xl xl:text-5xl lg:text-4xl">
//                                 Music Production Course In <span className="text-primary">90 Days</span>
//                             </h2>
//                             <p className="text-sm  uppercase tracking-[0.2em] leading-7 text-muted-foreground">
//                                 Bridge the gap between amateur demos and professional masters.
//                                 {/* Learn the technical precision and creative workflow used by
//                                 world-class producers in this intensive 3-month certification
//                                 course. */}
//                             </p>
//                             <Button variant="secondary" size="lg" asChild className="mt-4 w-full gap-2 sm:w-auto">
//                                 <Link href="/contact">
//                                     Enroll Now
//                                     <ArrowRight className="size-4" aria-hidden />
//                                 </Link>
//                             </Button>


//                         </div>

//                         {/* RIGHT SIDE */}
//                         <div>

//                             image
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//         // <section className="w-full bg-background py-10">
//         //     <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
//         //         <div className="mx-auto max-w-xl text-center">
//         //             <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-secondary sm:text-4xl lg:text-5xl">
//         //                 Master Logic Pro in <span className="text-primary"> 90 Days</span>
//         //             </h2>
//         //             <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground text-start">
//         //                 Bridge the gap between amateur demos and professional masters. Learn the technical precision and creative workflow used by world-class producers in this intensive 3-month certification course.
//         //             </p>
//         //         </div>
//         //     </div>
//         // </section>
//     );
// }