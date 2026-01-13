"use client";

export function AmbientGlow() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            <div
                className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px]"
                aria-hidden="true"
            />
            <div
                className="absolute top-[60%] -right-[10%] w-[600px] h-[600px] rounded-full bg-accent/20 blur-[120px]"
                aria-hidden="true"
            />
        </div>
    );
}
