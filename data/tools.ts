export type Tool = {
  id: string; name: string; description: string; url: string; category: string; free: boolean; icon: string;
};

export const tools: Tool[] = [
  { id:"1", name:"Canva", description:"Design product covers, social graphics, and thumbnails.", url:"https://canva.com", category:"Design", free:true, icon:"🎨" },
  { id:"2", name:"ConvertKit", description:"Email marketing built for creators.", url:"https://convertkit.com", category:"Email", free:true, icon:"📧" },
  { id:"3", name:"Notion", description:"Plan and organize your content and product roadmap.", url:"https://notion.so", category:"Productivity", free:true, icon:"📋" },
  { id:"4", name:"Loom", description:"Record quick product walkthrough videos.", url:"https://loom.com", category:"Video", free:true, icon:"🎥" },
  { id:"5", name:"Buffer", description:"Schedule social posts to promote your products.", url:"https://buffer.com", category:"Social", free:true, icon:"📅" },
];
