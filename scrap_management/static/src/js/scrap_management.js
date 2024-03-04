/** @odoo-module */
import { registry } from "@web/core/registry";
import { BlockUI } from "@web/core/ui/block_ui";
import { download } from "@web/core/network/download";
// This function is responsible for generating and downloading an XLSX report.
registry.category("ir.actions.report handlers").add("reportXlsx", async function (action){
    if (action.report_type === 'xlsx') {
        const blockUI = new BlockUI();
        await download({
            url: '/report_xlsx',
            data: action.data,
            complete: () => unblockUI,
            error: (error) => self.call('crash_manager', 'rpc_error', error),
        });
    }
});
