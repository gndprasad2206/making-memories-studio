"use client";
import { useState } from "react";
import { LogIn, Plus, Edit2, Trash2, Image as ImageIcon, Save, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { dummyBlogs } from "../blogs/page";

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [blogs, setBlogs] = useState(dummyBlogs);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newBlog, setNewBlog] = useState({ title: "", description: "", image: "", slug: "", date: "" });

  if (!isAuthenticated) return (
    <div className="min-h-screen bg-cream flex items-center justify-center p-4 pt-24">
      <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl w-full max-w-md border border-rosegold/5 text-center">
        <h1 className="text-3xl font-serif font-bold text-foreground mb-2">Admin Login</h1>
        <p className="text-foreground/70 mb-8 font-light text-sm">Valid credentials not required for demo</p>
        <div className="space-y-4">
          <input type="email" placeholder="Email" className="w-full px-5 py-3 rounded-xl bg-cream/50 border border-rosegold/20 focus:outline-none focus:border-rosegold focus:ring-1 focus:ring-rosegold transition-all" />
          <input type="password" placeholder="Password" className="w-full px-5 py-3 rounded-xl bg-cream/50 border border-rosegold/20 focus:outline-none focus:border-rosegold focus:ring-1 focus:ring-rosegold transition-all" />
          <button
            onClick={() => setIsAuthenticated(true)}
            className="w-full py-4 bg-rosegold text-white rounded-xl font-medium shadow-md hover:shadow-lg transition-all flex justify-center items-center gap-2 transform hover:-translate-y-0.5"
          >
            <LogIn className="w-5 h-5" /> Login to Dashboard
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-cream/30 pt-28 pb-12 flex flex-col md:flex-row gap-8 lg:px-12 px-4">
      <div className="w-full md:w-64 shrink-0 bg-white rounded-3xl shadow-sm p-6 flex flex-col gap-4 border border-rosegold/5">
        <h2 className="text-xl font-serif font-bold text-gradient mb-4">Studio Admin</h2>
        <button className="flex items-center gap-3 text-rosegold font-medium bg-rosegold/10 px-4 py-3 rounded-xl">
          <Menu className="w-5 h-5" /> Blogs Manager
        </button>
        <button onClick={() => setIsAuthenticated(false)} className="mt-auto flex justify-center items-center gap-2 text-red-500 font-medium px-4 py-3 rounded-xl hover:bg-red-50 transition-colors">
          <LogIn className="w-5 h-5 rotate-180" /> Logout
        </button>
      </div>

      <div className="flex-1 bg-white rounded-3xl shadow-sm p-8 border border-rosegold/5">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-serif font-bold">Manage Blogs</h1>
          <button
            onClick={() => setEditingId("new")}
            className="px-6 py-3 bg-foreground text-white rounded-full font-medium shadow-md hover:bg-black transition-all flex items-center gap-2 text-sm"
          >
            <Plus className="w-4 h-4" /> Add Blog
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence>
            {blogs.map((blog) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                key={blog.slug}
                className="p-6 rounded-2xl bg-cream flex gap-4 border border-rosegold/10"
              >
                <img src={blog.image} alt="Thumb" className="w-20 h-20 rounded-xl object-cover shrink-0" />
                <div className="flex flex-col flex-1">
                  <h3 className="font-serif font-bold leading-tight mb-1">{blog.title}</h3>
                  <span className="text-xs text-foreground/50 mb-4">{blog.date}</span>
                  <div className="mt-auto flex gap-3">
                    <button className="w-8 h-8 rounded-full bg-white text-blue-500 flex items-center justify-center hover:bg-blue-50 shadow-sm" onClick={() => setEditingId(blog.slug)}>
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      className="w-8 h-8 rounded-full bg-white text-red-500 flex items-center justify-center hover:bg-red-50 shadow-sm"
                      onClick={() => setBlogs(blogs.filter((b) => b.slug !== blog.slug))}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Edit Modal fake */}
        <AnimatePresence>
          {editingId && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 pb-20 pt-32"
            >
              <motion.div
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                exit={{ y: 50 }}
                className="bg-white max-w-2xl w-full max-h-[85vh] overflow-y-auto rounded-3xl p-8"
              >
                <h2 className="text-2xl font-serif font-bold mb-6">
                  {editingId === "new" ? "Create New Blog" : "Edit Blog"}
                </h2>
                <div className="space-y-5">
                  <div>
                    <label className="text-sm font-medium text-foreground/80 mb-1 block">Title</label>
                    <input type="text" placeholder="Title" className="w-full px-4 py-3 rounded-xl bg-cream border border-rosegold/20 focus:outline-none focus:border-rosegold" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground/80 mb-1 block">Cover Image</label>
                    <div className="w-full h-32 border-2 border-dashed border-rosegold/30 rounded-xl flex flex-col items-center justify-center text-rosegold/60 bg-cream/50 cursor-pointer hover:bg-rosegold/5 transition-colors">
                      <ImageIcon className="w-8 h-8 mb-2" />
                      <span className="text-sm font-medium">Click to upload image</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground/80 mb-1 block">Rich Text Editor (Mock)</label>
                    <div className="border border-rosegold/20 rounded-xl overflow-hidden bg-cream">
                      <div className="bg-white border-b border-rosegold/10 p-2 flex gap-2">
                        {["B", "I", "U", "Link", "List"].map((tool) => (
                          <button key={tool} className="px-3 py-1 bg-cream rounded-md text-xs font-medium hover:bg-rosegold/10 text-foreground/70">{tool}</button>
                        ))}
                      </div>
                      <textarea rows={6} className="w-full p-4 bg-transparent outline-none resize-none font-light text-sm" placeholder="Write your post content here..."></textarea>
                    </div>
                  </div>
                  <div className="flex gap-4 pt-4">
                    <button
                      onClick={() => setEditingId(null)}
                      className="flex-1 py-3 bg-cream text-foreground rounded-xl font-medium hover:bg-rosegold/10 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="flex-1 py-3 bg-rosegold text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all shadow-md transform hover:-translate-y-0.5"
                    >
                      <Save className="w-4 h-4" /> Save Post
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
