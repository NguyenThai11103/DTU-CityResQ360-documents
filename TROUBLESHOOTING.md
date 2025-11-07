# 🔧 Troubleshooting GitHub Pages Deployment

## Lỗi thường gặp và cách khắc phục

### 1. Workflow failed với exit code 1

**Nguyên nhân có thể:**
- Thiếu quyền (permissions) cho GitHub Actions
- Lỗi trong quá trình build
- Lỗi khi deploy lên branch gh-pages

**Cách khắc phục:**

1. **Kiểm tra Permissions:**
   - Vào **Settings** > **Actions** > **General**
   - Trong phần **Workflow permissions**, chọn:
     - ✅ **Read and write permissions**
     - ✅ **Allow GitHub Actions to create and approve pull requests**
   - Click **Save**

2. **Kiểm tra workflow file:**
   - Đảm bảo file `.github/workflows/deploy.yml` có `permissions: contents: write`
   - Đã được push lên repository

3. **Kiểm tra logs:**
   - Vào tab **Actions** trên GitHub
   - Click vào workflow run failed
   - Xem log chi tiết để tìm lỗi cụ thể

### 2. Build thành công nhưng không deploy được

**Nguyên nhân:**
- GitHub Pages chưa được cấu hình
- Branch gh-pages chưa được tạo
- Token không có quyền

**Cách khắc phục:**

1. **Cấu hình GitHub Pages:**
   - Vào **Settings** > **Pages**
   - Source: **Deploy from a branch**
   - Branch: **gh-pages** / **/ (root)**
   - Click **Save**

2. **Kiểm tra branch gh-pages:**
   - Vào tab **Branches** trên GitHub
   - Xem có branch `gh-pages` không
   - Nếu chưa có, workflow sẽ tự động tạo

### 3. Website hiển thị 404 hoặc không load được

**Nguyên nhân:**
- `baseUrl` trong `docusaurus.config.ts` không đúng
- GitHub Pages chưa được cấu hình đúng

**Cách khắc phục:**

1. **Kiểm tra baseUrl:**
   - Mở `docusaurus.config.ts`
   - Đảm bảo `baseUrl` khớp với tên repository:
     ```typescript
     baseUrl: '/DTU-CityResQ360-documents/',
     ```
   - Nếu repository là `username.github.io`, dùng `baseUrl: '/'`

2. **Kiểm tra URL:**
   - URL đúng: `https://nguyenthai11103.github.io/DTU-CityResQ360-documents/`
   - Không phải: `https://nguyenthai11103.github.io/DTU-CityResQ360-documents` (thiếu dấu `/` cuối)

### 4. Broken links warning

**Nguyên nhân:**
- Links trong markdown files không đúng
- File được reference không tồn tại

**Cách khắc phục:**

1. **Sửa links:**
   - Kiểm tra các file markdown
   - Sửa links từ `../LICENSE` thành `/License` hoặc đường dẫn đúng

2. **Hoặc ignore warnings:**
   - Trong `docusaurus.config.ts`, đã có:
     ```typescript
     onBrokenLinks: 'warn',
     ```
   - Warnings không làm fail build

### 5. Workflow không chạy tự động

**Nguyên nhân:**
- Branch name không khớp
- Workflow file chưa được commit

**Cách khắc phục:**

1. **Kiểm tra branch:**
   - Workflow chỉ chạy khi push lên `master` hoặc `main`
   - Kiểm tra branch hiện tại: `git branch`

2. **Trigger thủ công:**
   - Vào tab **Actions**
   - Chọn workflow **Deploy to GitHub Pages**
   - Click **Run workflow**
   - Chọn branch và click **Run workflow**

## 🔍 Debug steps

1. **Test build local:**
   ```bash
   yarn build
   yarn serve
   ```

2. **Kiểm tra workflow:**
   - Xem log trong tab **Actions**
   - Tìm step nào failed
   - Đọc error message

3. **Kiểm tra cấu hình:**
   - `docusaurus.config.ts`
   - `.github/workflows/deploy.yml`
   - `package.json`

4. **Kiểm tra GitHub settings:**
   - Settings > Pages
   - Settings > Actions > General
   - Settings > Actions > Runners

## 📞 Cần giúp đỡ?

Nếu vẫn gặp vấn đề:
1. Kiểm tra [GitHub Actions logs](https://github.com/NguyenThai11103/DTU-CityResQ360-documents/actions)
2. Xem [Docusaurus deployment docs](https://docusaurus.io/docs/deployment)
3. Tạo issue trên GitHub với thông tin lỗi chi tiết

