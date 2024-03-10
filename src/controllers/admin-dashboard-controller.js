import { db } from "../models/db";


export const adminDashboardController = {
    index: {
        handler: async function (request, h) {
            const users = await db.userStore.getAllUsers();
            const viewData = {
                title: "Admin Dashboard",
                users: users,
            };
            return h.view("admin-dashboard-view", viewData);
            }
    },
    
};