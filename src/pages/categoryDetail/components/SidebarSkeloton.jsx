import React from 'react'

function SidebarSkeloton() {
    return (
        <div className="w-64 h-screen md:flex hidden flex-col gap-y-6">
            <div className=" rounded-md max-w-sm w-full mx-auto">
                <div className="animate-pulse flex space-x-4">
                    <div className="flex-1 space-y-6 py-1">
                        <div className="flex justify-between">
                            <div className="h-4 bg-slate-200 rounded w-12"></div>
                            <div className="h-4 bg-slate-200 rounded w-16"></div>
                        </div>
                        <div className="flex justify-between gap-3">
                            <div className="div bg-slate-200 rounded h-8 flex-1"></div>
                            <div className="div bg-slate-200 rounded h-8 flex-1"></div>
                        </div>
                        <div className="h-4 bg-slate-200 rounded"></div>
                        <div className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="h-4 bg-slate-200 rounded col-span-1"></div>
                                <div className="h-4 bg-slate-200 rounded col-span-1"></div>
                            </div>
                            <div className="h-4 bg-slate-200 w-1/2 rounded"></div>
                            <div className="h-4 bg-slate-200 w-1/2 rounded"></div>
                            <div className="h-4 bg-slate-200 w-1/2 rounded"></div>
                            <div className="h-4 bg-slate-200 w-1/2 rounded"></div>
                            <div className="h-4 bg-slate-200 w-1/2 rounded"></div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="h-4 bg-slate-200 rounded col-span-1"></div>
                                <div className="h-4 bg-slate-200 rounded col-span-1"></div>
                            </div>
                            <div className="h-4 bg-slate-200 w-1/2 rounded"></div>
                            <div className="h-4 bg-slate-200 w-1/2 rounded"></div>
                            <div className="h-4 bg-slate-200 w-1/2 rounded"></div>
                            <div className="h-4 bg-slate-200 w-1/2 rounded"></div>
                            <div className="h-4 bg-slate-200 w-1/2 rounded"></div>
                          
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SidebarSkeloton
