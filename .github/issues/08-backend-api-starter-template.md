### Problem
Pilihan template saat ini baru ada 4 (*Web Application*, *Library / Package*, *CLI Tool*, *Minimalist Starter*). Belum ada template yang difokuskan khusus untuk proyek **Backend / REST & GraphQL API / Microservices**.

### Why
Proyek backend membutuhkan bagian dokumentasi khusus seperti: *API Endpoints summary*, *Environment Variables table*, *Database Migrations*, dan *Health Checks*.

### Current Behavior
Pengembang backend harus memilih template Web Application lalu menghapus dan membuat banyak section manual.

### Expected Behavior
Tersedia template ke-5 bernama "Backend API / Microservice" dengan struktur section siap pakai (Architecture, API Endpoints, Environment Variables, Database Setup, Docker Run).

### Acceptance Criteria
- [ ] Template baru muncul di modal `TemplateSelector`.
- [ ] Memilih template ini memuat struktur section backend yang lengkap dan representatif.
- [ ] Tipe TypeScript tetap valid tanpa error kompilasi.
