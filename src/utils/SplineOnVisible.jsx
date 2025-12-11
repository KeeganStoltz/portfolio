import { useEffect, useRef, useState, Suspense } from "react";
import Spline from "./SplineLoader";


export default function SplineOnVisible({ scene, className }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);


    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);


    return (
        <div ref={ref} className={className} style={{ minHeight: 300 }}>
            {visible && (
                <Suspense
                    fallback={
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-500 border-t-transparent" />
                        </div>
                    }
                >
                    <Spline scene={scene} />
                </Suspense>
            )}
        </div>
    );
}