# 🌆 CityResQ360 — Nền tảng phản ánh, cảnh báo & giám sát đô thị thông minh

![s](/static/img/Banner.png)

> _"🏙️ Smart City Platform 🤖"_

CityResQ360 là hệ thống web + mobile mã nguồn mở giúp người dân, chính quyền và hệ thống AI phối hợp trong việc phát hiện, phản ánh và xử lý sự cố đô thị theo thời gian thực. Mục tiêu của dự án là tăng tính minh bạch, cải thiện tốc độ phản ứng của cơ quan chức năng và ứng dụng trí tuệ nhân tạo để hướng tới một thành phố vận hành tự động, an toàn và bền vững hơn.

---

## 🧭 Giới thiệu & ý tưởng tổng thể

Trong các đô thị hiện đại, việc phát hiện sớm và xử lý nhanh các sự cố như kẹt xe, ngập úng, cháy nổ, tai nạn giao thông, rác thải hoặc vi phạm công cộng đóng vai trò quan trọng. CityResQ360 ra đời như "mắt thần đô thị 360°", nơi người dân, chính quyền và AI cùng giám sát, phản hồi và cảnh báo các vấn đề đô thị theo thời gian thực.

Vấn đề thực tế:

- Phản ánh từ người dân còn chậm và rời rạc.
- Cơ quan quản lý thiếu thông tin tức thời để ra quyết định.
- Dữ liệu đô thị chưa được liên kết và khai thác hiệu quả.
- Hệ thống cảnh báo còn thủ công, thiếu khả năng dự đoán.

---

## 🎯 Mục tiêu dự án

- Tăng tính minh bạch và tương tác công dân — mọi phản ánh được ghi nhận và theo dõi công khai.
- Tối ưu hóa quy trình phản ứng đô thị bằng AI (phân loại, đánh giá mức độ, gợi ý xử lý).
- Xây dựng hệ thống dữ liệu đô thị mở theo chuẩn NGSI-LD.
- Khuyến khích công dân đóng góp thông tin chính xác bằng hệ thống CityPoint.
- Hỗ trợ nghiên cứu và phát triển giải pháp thông minh cho thành phố.

---

## 🆘 Thách thức đô thị mà dự án hướng tới

- Tốc độ đô thị hóa cao → hạ tầng & giám sát không theo kịp.
- Dữ liệu tách biệt giữa cơ quan → khó tổng hợp nhanh.
- Người dân thiếu kênh báo cáo hiệu quả → thông tin mất mát hoặc chậm.
- Cảnh báo và phát hiện xu hướng còn thủ công.

---

## 💡 Giải pháp CityResQ360

- Ứng dụng web/mobile cho người dân gửi phản ánh kèm ảnh, vị trí GPS và mô tả.
- AI xử lý hình ảnh để phân loại và ước lượng mức khẩn cấp.
- Dashboard trực quan cho cơ quan xử lý: bản đồ realtime, biểu đồ KPI, phân công nhiệm vụ.
- Cơ chế thưởng CityPoint khuyến khích đóng góp hữu ích.
- API mở (NGSI-LD) để tích hợp với hệ thống thành phố và bên thứ ba.

---

## 🎯 Đối tượng hướng đến

![s](/static/img/doituong.png)

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

## 📱 Chức năng chính

![s](/static/img/chucnang.png)

- AI tự động phân loại phản ánh: cháy, ngập, tai nạn, rác, tắc đường, v.v.
- Bản đồ đô thị realtime hiển thị mức độ khẩn cấp theo khu vực.
- Dashboard quản lý: theo dõi, phân công và cập nhật tiến độ xử lý.
- Thống kê & báo cáo: tốc độ phản hồi, chỉ số minh bạch, hiệu quả đơn vị.
- CityPoint token: hệ thống điểm thưởng cho người đóng góp.
- Cảnh báo khu vực khi phát hiện nhiều phản ánh trùng lặp.
- API mở để nhà phát triển khai thác dữ liệu.

---

## 🧠 Tính năng nổi bật

### 🤖 Phản ánh & nhận diện tự động

- AI Vision & NLP phân tích hình ảnh, âm thanh, nội dung phản ánh.
- Phân loại mức độ nguy hiểm & cảnh báo khẩn cấp đến cơ quan liên quan.
- Gợi ý hướng dẫn an toàn và thông báo cộng đồng lân cận.

### 📡 Giám sát & quản lý realtime

- Bản đồ trực quan thể hiện trạng thái từng khu vực.
- Dashboard phân tích thống kê phản ánh theo thời gian, vị trí và loại sự cố.
- Chấm điểm mức độ minh bạch và tốc độ phản hồi của từng cơ quan.

### 🏦 CityWallet – Hệ thống điểm thưởng

- Công dân được thưởng điểm **CityPoint** khi phản ánh hữu ích.
- Đổi quà, voucher, hoặc sử dụng trong các dịch vụ đô thị.

---

# 🗺️ Kiến trúc hệ thống

![s](/static/img/kientruc.png)

---

## ⚙️ Công nghệ sử dụng

Hệ thống sử dụng đa dạng các công nghệ hiện đại, tập trung vào hiệu năng và khả năng mở rộng:

| Phân loại                              | Công nghệ cụ thể                                | Vai trò                                                              |
| :------------------------------------- | :---------------------------------------------- | :------------------------------------------------------------------- |
| **Giao diện người dùng (UI)**          | **React Native**                                | Phát triển ứng dụng di động đa nền tảng.                             |
| **Cổng API (Gateway)**                 | **API Gateway**                                 | Bảo mật, giới hạn tốc độ (Rate limit), xác thực JWT.                 |
| **Backend/Core APIs**                  | **Laravel** (PHP), **Python** (FastAPI)         | Phát triển dịch vụ RFI/Public API và các microservices.              |
| **Xác thực (Auth)**                    | **Authenticator**, **JWT**                      | Quản lý định danh và truy cập (IDDC), xác thực người dùng.           |
| **Tin nhắn/Sự kiện**                   | **RabbitMQ** , **MQTT Broker** (EMQX/Mosquitto) | Xử lý hàng đợi sự kiện tốc độ cao và tin nhắn từ cảm biến (Sensors). |
| **Cơ sở dữ liệu (Database)**           | **PostgreSQL/PostGIS**                          | Dữ liệu quan hệ và dữ liệu địa lý (Geo/Poi).                         |
| **Lưu trữ đối tượng (Object storage)** | **MinIO / S3**                                  | Lưu trữ dữ liệu media (Media service).                               |
| **Tìm kiếm (Search)**                  | **OpenSearch**                                  | Cung cấp khả năng tìm kiếm nâng cao (Search API).                    |
| **Cache/Hàng đợi**                     | **Redis Queue/Cache**                           | Caching, quản lý hàng đợi cho Notifier service và Rule engine.       |
| **Rule engine**                        | **NDx/Drools**                                  | Xử lý logic nghiệp vụ và các quy tắc cảnh báo.                       |

---

## 🛠️ Các dịch vụ và chức năng chính (Microservices)

Hệ thống được tổ chức thành các dịch vụ độc lập (Microservices), giao tiếp chủ yếu qua HTTP (REST) và RabbitMQ/MQTT.

### 1. Dịch vụ cốt lõi

- **RFI/Public API:** Điểm truy cập chính cho các giao diện người dùng. Xử lý logic tổng hợp dữ liệu (Aggregation) và caching (Vũ cache).

- **Media service:** Quản lý và lưu trữ tệp tin đa phương tiện vào **MinIO / S3**.

- **Wallet service:** Xử lý các chức năng liên quan đến ví điện tử/thanh toán.

- **Search API:** Cung cấp giao diện tìm kiếm dữ liệu thông qua **OpenSearch**.

### 2. Dịch vụ IoT và phân tích dữ liệu

- **IoT adapter:** Nhận tin nhắn từ **MQTT broker** (Sensors), xử lý và đưa vào luồng sự kiện **RabbitMQ**.

- **NLP (Natural Language Processing):** Phân tích và xử lý ngôn ngữ tự nhiên.

- **Vision (Vision Python/FastAPI):** Xử lý thị giác máy tính, tạo ra các sự kiện **`vision_alert`**.

- **Geo/Poi:** Xử lý dữ liệu vị trí và điểm quan tâm (Point of interest) sử dụng **PostGIS**.

### 3. Dịch vụ quản lý và thông báo

- **Report service:** Tạo báo cáo, lưu trữ vào **DB Report** và **`Produce report observed`** event.

- **Rule engine (NDx/Drools):** Tiêu thụ các sự kiện cảnh báo từ Vision và Report, áp dụng luật nghiệp vụ để **`Produce alert triggered`**.

- **Incident service:** Xử lý và quản lý vòng đời của các sự cố, lưu trữ vào **DB Incident**.

- **Notifier service:** Nhận sự kiện **`alert triggered`** và phân phối thông báo (sử dụng **Redis Queue/Cache**) tới ứng dụng (React Native App) và các nền tảng khác (Laravel Webhook).

---

## ➡️ Luồng dữ liệu chính

1.  **Truy cập Ứng dụng:** **React Native App** gửi yêu cầu qua **HTTPS + JWT** đến **API Gateway**.

2.  **Dữ liệu Cảm biến:** **Sensors** -> **MQTT Broker** -> **IoT Adapter** -> **RabbitMQ**.

3.  **Luồng Cảnh báo/Sự cố:**

    - **Vision Service** (hoặc **Report Service**) tạo **`vision/report alert`**.

    - **RabbitMQ** truyền tải các sự kiện này.

    - **Rule Engine** tiêu thụ, áp dụng luật, và tạo **`alert triggered`**.

    - **Notifier Service** nhận **`alert triggered`** để **broadcast data** tới **React Native App** (qua HTTP/Websocket) và **Laravel Webhook**.

4.  **Dữ liệu Báo cáo:** **Report Service** lưu dữ liệu vào **DB Report** và tạo sự kiện cho **Rule Engine**.

5.  **Quản lý Sự cố:** **Incident Service** nhận thông tin liên quan và lưu vào **DB Incident**.

---

## 🔬 AI & dữ liệu

- Vision: YOLOv8 / Detectron2 cho phát hiện đối tượng/sự cố từ ảnh.
- NLP: PhoBERT / XLM-R cho phân loại mô tả tiếng Việt và trích xuất thực thể.
- Fusion layer: hợp nhất kết quả ảnh, văn bản và metadata để đưa ra nhãn cuối cùng và mức ưu tiên.
- Đánh giá: Precision, Recall, F1-score, mAP và chỉ số độ tin cậy AI.
- Dữ liệu lưu trữ theo chuẩn NGSI-LD để dễ tích hợp và chia sẻ.

---

## ♻️ Quy trình hoạt động (tóm tắt)

1. Người dân gửi phản ánh (ảnh, mô tả, vị trí).
2. Hệ thống lưu ảnh và đẩy message vào hàng đợi.
3. Worker gọi AI microservice để phân tích hình ảnh & văn bản.
4. Kết quả được ghép với metadata, cập nhật entity (NGSI-LD) và hiển thị trên bản đồ.
5. Nếu cần, phát cảnh báo tới đơn vị liên quan và công dân (push/SMS/email).
6. Hoàn thành xử lý → cập nhật trạng thái và tính điểm CityPoint cho reporter.

---

## 🚀 Hướng phát triển tương lai

### 🌐 Mở rộng dữ liệu & cảm biến

- Mở rộng quy mô đến nhiều tỉnh, thành phố và khu vực khác nhau, hướng tới phạm vi toàn quốc.

- Hỗ trợ đa ngôn ngữ để dễ dàng triển khai ở các quốc gia Đông Nam Á.

- Tích hợp bản đồ chi tiết thời gian thực, thể hiện các vùng chịu ảnh hưởng, điểm tập trung cứu trợ, và đường di tản an toàn.

### 🧠 Phát triển năng lực AI

- Phát triển mô hình dự đoán rủi ro dựa trên dữ liệu khí tượng, địa hình và lịch sử thảm họa.

- Ứng dụng AI phân tích hình ảnh từ camera, UAV hoặc dữ liệu do người dân gửi lên để nhận diện cháy nổ, ngập lụt, sạt lở,…

- Tích hợp chatbot AI hỗ trợ thông minh, hướng dẫn sơ tán, cảnh báo và tiếp nhận báo cáo tự động.

### 💬 Tăng cường tương tác công dân

| Tính năng                         | Mô tả                                         |
| --------------------------------- | --------------------------------------------- |
| 🤖 **Chatbot AI công dân**        | Hỏi – đáp trực tiếp, tra cứu trạng thái sự cố |
| 📱 **App di động (React Native)** | Gửi phản ánh, nhận cảnh báo realtime          |
| 🏆 **CityPoint**                  | Gamification khuyến khích người dân đóng góp  |
| 🗺️ **Bản đồ cộng đồng**           | Thể hiện tỷ lệ xử lý & phản hồi minh bạch     |

### 🔒 Blockchain & civic token

- Lưu trữ phản ánh và xác nhận xử lý bằng **smart contract**.

- Token hóa **CityPoint** làm phần thưởng minh bạch.

- Ghi log minh bạch trên **Polygon / Ethereum**.

---

## 🛠️ Hướng dẫn cài đặt

### 🚀 Cài đặt nhanh với docker

**Yêu cầu**: Docker, Docker Compose, Git

```bash
# 1. Clone repository
git clone https://github.com/MNM-DTU-DZ/CityResQ360-DTUDZ.git
cd CityResQ360-DTUDZ

# 2. Cấu hình environment
cp modules/CoreAPI/.env.example modules/CoreAPI/.env

# 3. Tạo cấu hình MQTT
mkdir -p infrastructure/mosquitto/config
cat > infrastructure/mosquitto/config/mosquitto.conf << 'EOF'
listener 1883
allow_anonymous true
persistence true
persistence_location /mosquitto/data/
log_dest file /mosquitto/log/mosquitto.log
EOF

# 4. Khởi động hệ thống
cd infrastructure/docker
docker compose up -d

# 5. Chạy migrations
docker exec -it cityresq-coreapi php artisan migrate --seed
docker exec -it cityresq-coreapi php artisan key:generate
```

**Truy cập**:

- 🌐 CoreAPI: http://localhost:8000
- 📱 Web App: http://localhost:3000
- 📦 MinIO Console: http://localhost:9001 (minioadmin/minioadmin)
- 🐰 RabbitMQ: http://localhost:15672 (cityresq/cityresq_password)

---

## 🐛 Báo lỗi

Nếu bạn phát hiện lỗi, vui lòng tạo issue mới với:

- Mô tả chi tiết lỗi
- Các bước tái hiện
- Screenshots nếu có
- Môi trường (browser, OS...)
- Báo cáo lỗi và đề xuất tính năng mới tại [GitHub Issues](https://github.com/MNM-DTU-DZ/CityResQ360-DTUDZ/issues)

---

## 🤝 Đóng góp

- Fork → tạo branch feature/{tên} → mở Pull Request mô tả thay đổi.
- Viết unit test cho tính năng mới; tuân thủ PSR-12 (PHP).
- Báo lỗi bảo mật trực tiếp cho maintainer trước khi public issue.
- Chúng tôi rất hoan nghênh mọi đóng góp! Xem [CONTRIBUTING](https://github.com/Truongpyeo/CityResQ360-DTUDZ/blob/master/LICENSE) để biết thêm chi tiết.

---

## 📜 Changelog

Xem [CHANGELOG](https://github.com/Truongpyeo/CityResQ360-DTUDZ/blob/master/CHANGELOG.md) để biết lịch sử thay đổi.

---

## 📄 Giấy phép

Dự án này được phân phối dưới [GNU General Public License v3.0](LICENSE). Xem file `LICENSE` để biết thêm chi tiết.

---

## 📞 Liên hệ

- Lê Thanh Trường : <u>thanhtruong23111999@gmail.com</u>

- Nguyễn Văn Nhân : <u>vannhan130504@gmail.com</u>

- Nguyễn Ngọc Duy Thái : <u>kkdn011@gmail.com</u>

---

_"Được phát triển với ❤️ bởi Nhóm DTU-DZ1"_
