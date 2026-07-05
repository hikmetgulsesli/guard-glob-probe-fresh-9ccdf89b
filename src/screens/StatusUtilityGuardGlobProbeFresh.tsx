// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Status Utility - Guard Glob Probe Fresh
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BadgeHelp, CheckCircle2, HeartPulse, Info, RefreshCw } from "lucide-react";


export type StatusUtilityGuardGlobProbeFreshActionId = "refresh-1" | "refresh-status-2";

export interface StatusUtilityGuardGlobProbeFreshProps {
  actions?: Partial<Record<StatusUtilityGuardGlobProbeFreshActionId, () => void>>;

}

export function StatusUtilityGuardGlobProbeFresh({ actions }: StatusUtilityGuardGlobProbeFreshProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-surface dark:bg-surface border-b border-outline-variant dark:border-outline flex justify-between items-center px-margin-desktop py-md w-full shrink-0">
      <div className="flex items-center gap-sm">
      <span className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim">Guard Glob Probe Fresh</span>
      </div>
      <div className="flex items-center gap-md">
      <span className="font-label-caps text-label-caps text-on-surface-variant">Last Updated: 14:02:11</span>
      <button className="p-unit rounded-DEFAULT hover:bg-surface-container-low transition-colors duration-150 ease-in-out text-primary flex items-center justify-center" type="button" aria-label="Refresh" data-action-id="refresh-1" onClick={actions?.["refresh-1"]}>
      <RefreshCw  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Main Content Canvas */}
      <main className="flex-1 overflow-y-auto p-margin-desktop bg-background flex justify-center">
      <div className="w-full max-w-4xl flex flex-col gap-gutter">
      {/* Controls Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-md mb-sm">
      <div className="flex items-center gap-md">
      <span className="font-title-sm text-title-sm text-on-surface">System State</span>
      {/* Toggle Switch */}
      <label className="relative inline-flex items-center cursor-pointer">
      <input defaultChecked={true} className="sr-only peer" type="checkbox" defaultValue="" />
      <div className="w-11 h-6 bg-surface-tint rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#10B981]"></div>
      <span className="ml-3 font-label-caps text-label-caps text-on-surface-variant peer-checked:text-[#10B981]">Ready</span>
      </label>
      </div>
      <button className="bg-secondary text-on-secondary px-md py-sm rounded-DEFAULT font-label-caps text-label-caps hover:bg-on-secondary-fixed-variant transition-colors flex items-center gap-sm uppercase tracking-wider" type="button" data-action-id="refresh-status-2" onClick={actions?.["refresh-status-2"]}>
      <RefreshCw className="text-[18px]" aria-hidden={true} focusable="false" />
                          Refresh Status
                      </button>
      </div>
      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
      {/* Card 1 */}
      <div className="flat-card p-md flex flex-col gap-sm">
      <div className="flex items-center gap-sm">
      <CheckCircle2  style={{fontVariationSettings: "'FILL' 1"}} className="text-[#10B981]" aria-hidden={true} focusable="false" />
      <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase">System Integrity</h3>
      </div>
      <div className="font-title-sm text-title-sm text-on-surface">Secure</div>
      </div>
      {/* Card 2 */}
      <div className="flat-card p-md flex flex-col gap-sm">
      <div className="flex items-center gap-sm">
      <BadgeHelp  style={{fontVariationSettings: "'FILL' 1"}} className="text-[#3B82F6]" aria-hidden={true} focusable="false" />
      <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase">Probe Connectivity</h3>
      </div>
      <div className="font-title-sm text-title-sm text-on-surface">Active</div>
      </div>
      {/* Card 3 */}
      <div className="flat-card p-md flex flex-col gap-sm">
      <div className="flex items-center gap-sm">
      <HeartPulse  style={{fontVariationSettings: "'FILL' 1"}} className="text-[#10B981]" aria-hidden={true} focusable="false" />
      <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase">Data Stream</h3>
      </div>
      <div className="font-title-sm text-title-sm text-on-surface">Stable</div>
      </div>
      </div>
      {/* Activity Log */}
      <div className="flat-card mt-sm flex flex-col">
      <div className="p-md bg-[#F1F5F9] border-b border-[#E2E8F0]">
      <h2 className="font-label-caps text-label-caps text-on-surface-variant uppercase">Activity Log</h2>
      </div>
      <div className="flex flex-col">
      <div className="flex items-center p-md log-item-border hover:bg-[#F1F5F9] transition-colors">
      <span className="font-data-tabular text-data-tabular text-on-surface-variant w-32 shrink-0">14:02:11.452</span>
      <span className="px-2 py-unit text-[10px] uppercase font-bold rounded-DEFAULT status-pill-green mr-md shrink-0">Fresh</span>
      <span className="font-body-md text-body-md text-on-surface truncate">Handshake verified with primary node</span>
      </div>
      <div className="flex items-center p-md log-item-border hover:bg-[#F1F5F9] transition-colors">
      <span className="font-data-tabular text-data-tabular text-on-surface-variant w-32 shrink-0">14:01:45.109</span>
      <span className="px-2 py-unit text-[10px] uppercase font-bold rounded-DEFAULT status-pill-blue mr-md shrink-0">Info</span>
      <span className="font-body-md text-body-md text-on-surface truncate">Probe sequence initiated on Glob-7</span>
      </div>
      <div className="flex items-center p-md log-item-border hover:bg-[#F1F5F9] transition-colors">
      <span className="font-data-tabular text-data-tabular text-on-surface-variant w-32 shrink-0">14:00:02.881</span>
      <span className="px-2 py-unit text-[10px] uppercase font-bold rounded-DEFAULT status-pill-green mr-md shrink-0">Fresh</span>
      <span className="font-body-md text-body-md text-on-surface truncate">System state marked as Ready</span>
      </div>
      <div className="flex items-center p-md hover:bg-[#F1F5F9] transition-colors">
      <span className="font-data-tabular text-data-tabular text-on-surface-variant w-32 shrink-0">13:59:10.005</span>
      <span className="px-2 py-unit text-[10px] uppercase font-bold rounded-DEFAULT bg-[#F59E0B] text-white mr-md shrink-0">Probing</span>
      <span className="font-body-md text-body-md text-on-surface truncate">Initial diagnostic scan running</span>
      </div>
      </div>
      </div>
      {/* Feedback / Empty State Panel */}
      <div className="flat-card p-md mt-sm bg-surface-container-low border-surface-variant flex items-start gap-md">
      <Info className="text-on-surface-variant mt-unit" aria-hidden={true} focusable="false" />
      <div className="flex flex-col gap-unit">
      <span className="font-body-md text-body-md font-semibold text-on-surface">No connection issues detected</span>
      <span className="font-body-md text-body-md text-on-surface-variant text-sm">All glob probes are reporting nominal status. System is operating within expected parameters.</span>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
