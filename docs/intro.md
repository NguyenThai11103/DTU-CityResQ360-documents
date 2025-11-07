# CityResQ360

### *Nền tảng phản ánh, cảnh báo & giám sát đô thị thông minh*
> *"🏙️ Smart City Platform 🤖"*

![Banner](../static/img/Banner.png)

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](../LICENSE)

## 📖 Tổng quan

**CityResQ360** là hệ thống web + mobile mã nguồn mở giúp người dân, chính quyền và hệ thống AI phối hợp trong việc phát hiện, phản ánh và xử lý sự cố đô thị theo thời gian thực. Mục tiêu của dự án là tăng tính minh bạch, cải thiện tốc độ phản ứng của cơ quan chức năng và ứng dụng trí tuệ nhân tạo để hướng tới một thành phố vận hành tự động, an toàn và bền vững hơn.

## 🎯 Mục tiêu

- **Tăng tính minh bạch**: Mọi phản ánh được ghi nhận và theo dõi công khai
- **Tối ưu hóa quy trình**: Sử dụng AI để phân loại, đánh giá mức độ và gợi ý xử lý
- **Dữ liệu mở**: Xây dựng hệ thống dữ liệu đô thị mở theo chuẩn NGSI-LD
- **Khuyến khích tham gia**: Hệ thống CityPoint thưởng điểm cho đóng góp hữu ích
- **Nghiên cứu & phát triển**: Hỗ trợ phát triển giải pháp thông minh cho thành phố

## 💡 Tính năng chính

### 🤖 Phản ánh & nhận diện tự động
- AI Vision & NLP phân tích hình ảnh, âm thanh, nội dung phản ánh
- Phân loại mức độ nguy hiểm & cảnh báo khẩn cấp
- Gợi ý hướng dẫn an toàn và thông báo cộng đồng

### 📡 Giám sát & quản lý realtime
- Bản đồ trực quan thể hiện trạng thái từng khu vực
- Dashboard phân tích thống kê phản ánh theo thời gian, vị trí và loại sự cố
- Chấm điểm mức độ minh bạch và tốc độ phản hồi

### 🏦 CityWallet – Hệ thống điểm thưởng
- Công dân được thưởng điểm **CityPoint** khi phản ánh hữu ích
- Đổi quà, voucher, hoặc sử dụng trong các dịch vụ đô thị

## 🏗️ Kiến trúc hệ thống

### Frontend
- React Native - Ứng dụng di động đa nền tảng
- Bản đồ realtime với tích hợp GPS
- Camera integration để gửi phản ánh

### Backend
- Laravel Framework - API REST
- Python FastAPI - AI Services
- Microservices architecture
- Event-driven design

### Database & Storage
- PostgreSQL/PostGIS - Dữ liệu quan hệ và địa lý
- MinIO/S3 - Lưu trữ media
- OpenSearch - Tìm kiếm nâng cao
- Redis - Cache và queue

### Message Queue
- Kafka (Redpanda) - Event streaming
- MQTT Broker (EMQX/Mosquitto) - IoT sensors

### AI/ML
- YOLOv8 / Detectron2 - Computer Vision
- PhoBERT / XLM-R - NLP
- Fusion Layer - Tổng hợp kết quả

### Authentication
- Keycloak - SSO/Identity Management
- JWT - API authentication

## 🎯 Đối tượng hướng đến

![Đối tượng hướng đến](../static/img/doituong.png)


Hệ thống **CityResQ360** được phát triển nhằm phục vụ nhiều nhóm người dùng trong đô thị, tập trung vào việc phản ánh, giám sát và cảnh báo sự cố hạ tầng, môi trường và an toàn đô thị theo thời gian thực.

---

### 👥 1. Người dân trong khu vực bị ảnh hưởng
**Mục tiêu:** Hỗ trợ người dân nhanh chóng gửi yêu cầu cứu trợ và nhận thông tin an toàn trong tình huống khẩn cấp.  

**Lợi ích:**
- Gửi phản ánh kèm hình ảnh, mô tả và vị trí GPS.
- Theo dõi tiến trình xử lý phản ánh của cơ quan chức năng.
- Nhận thông báo và cảnh báo khu vực nguy hiểm (ngập, kẹt xe, ô nhiễm...).
- Nhận điểm thưởng CityPoint khi đóng góp thông tin hữu ích.

---

### 🏛️ 2. Cơ quan chức năng & tổ chức cứu trợ
**Mục tiêu:** Hỗ trợ các đơn vị quản lý thảm họa và cứu hộ **điều phối nguồn lực và nhân sự** hiệu quả.  

**Lợi ích:**
- Tiếp nhận, phân loại và xử lý phản ánh tự động theo mức độ ưu tiên.
- Quản lý dữ liệu sự cố, bản đồ realtime và báo cáo thống kê.
- Theo dõi chỉ số minh bạch và tốc độ phản hồi.
---

### 🤝 3. Tình nguyện viên & tổ chức phi chính phủ (NGO)
**Mục tiêu:** Kết nối và quản lý hoạt động của các cá nhân/tổ chức cứu trợ tự nguyện.  

**Lợi ích:**
- Truy cập dữ liệu công khai theo chuẩn NGSI-LD.
- Kết nối dịch vụ hoặc cảm biến IoT vào hệ thống.
- Phân tích xu hướng và rủi ro đô thị phục vụ nghiên cứu & kinh doanh.
- Cung cấp giải pháp mở rộng: camera, AI Vision, bản đồ số, v.v.

---

### 🧑‍💼 4. Quản trị viên hệ thống (Admin)
**Mục tiêu:** Quản lý toàn bộ hệ thống và người dùng, đảm bảo vận hành ổn định.  

**Lợi ích:**
- Quản lý người dùng, phân quyền theo vai trò.
- Giám sát hoạt động của toàn hệ thống và API tích hợp.
- Cấu hình nguồn dữ liệu, cảm biến và tích hợp bản đồ.
- Theo dõi hiệu năng và cảnh báo sự cố kỹ thuật.

---

### 🧠 5. Nhà nghiên cứu & nhà phát triển
**Mục tiêu:** Mở rộng khả năng nghiên cứu và ứng dụng công nghệ mới trong lĩnh vực cứu hộ - cứu nạn.  

**Lợi ích:**
- Truy cập dữ liệu mở (Open Data) để phân tích xu hướng đô thị.
- Nghiên cứu ứng dụng AI, NLP, Vision, IoT trong quản lý đô thị.
- Thử nghiệm mô hình Digital Twin và dự báo rủi ro hạ tầng.
- Đóng góp module mở rộng hoặc plugin mới cho hệ thống.

---

## ⚙️ Yêu cầu hệ thống

| Software     | Minimum Version       |
| ------------ | --------------------- |
| **Laravel**   | 12x                  |
| **Python**   | 3.10+                |
| **Node.js**  | >=18.0.0             |
| **PostgreSQL** | 14+                |
| **Redis**    | 7.0+                 |
| **Kafka**    | 3.0+                 |

## 🔐 Bảo mật

- Xác thực đa yếu tố
- Mã hóa dữ liệu nhạy cảm
- API rate limiting
- Access control
- Audit logs

## 👥 Team Members

| Role      | Name                    | Email                                                                 |
| --------- | ----------------------- | --------------------------------------------------------------------- |
| Developer | **Lê Thanh Trường**      | [thanhtruong23111999@gmail.com](mailto:thanhtruong23111999@gmail.com) |
| Developer | **Nguyễn Văn Nhân**      | [vannhan130504@gmail.com](mailto:vannhan130504@gmail.com)             |
| Developer | **Nguyễn Ngọc Duy Thái** | [kkdn011@gmail.com](mailto:kkdn011@gmail.com)                         |

## 🤝 Đóng góp

```bash
# 1. Fork repository
git clone https://github.com/Truongpyeo/CityResQ360-DTUDZ.git
cd CityResQ360-DTUDZ

# 2. Create feature branch
git checkout -b feat/my-feature

# 3. Commit changes
git commit -m "feat: add new feature"

# 4. Create Pull Request
git push origin feat/my-feature
```

### Contribution Guidelines
- ✅ Follow [Conventional Commits](https://www.conventionalcommits.org/)
- ✅ Write tests for new code
- ✅ Update documentation
- ✅ Follow code style guide

## 📝 License

Released under the MIT License – see [LICENSE](../LICENSE) file for details.

© 2025 CityResQ360 – Được phát triển với ❤️ bởi Nhóm DTU-DZ
