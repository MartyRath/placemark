import { db } from "../models/db.js";


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

    deleteUser: {
        handler: async function (request, h) {
            await db.userStore.deleteUserById(request.params.id);
            return h.redirect("/admin");
        }
    },

};