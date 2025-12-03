#  Kiến Trúc Hệ Thống (System Architecture)

![s](../static/img/kientruc.png)

---

## 2. Các thành phần và Công nghệ chính

| Thành phần/Lớp 📍                | Công nghệ 🪄                                                                 | Mô tả ✨                                                                                                                |
| :------------------------------- | :--------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------- |
| **Lớp Giao diện (Client Layer)** | `React Native`, `HTTPS`, `JWT`                                               | Ứng dụng di động kết nối an toàn với backend qua HTTPS, sử dụng JWT để xác thực và phân quyền người dùng.               |
| **Lớp API Gateway**              | `API Gateway`, `Authenticator`                                               | Điểm vào duy nhất của hệ thống, xử lý xác thực, định tuyến request và load balancing cho các microservices.             |
| **Lớp Dịch vụ Core (Core API)**  | `Laravel/PHP`, `Redis` (Cache)                                               | API chính xử lý logic nghiệp vụ, tổng hợp dữ liệu từ các microservices, sử dụng Redis để cache và tăng hiệu suất.       |
| **Lớp Microservices**            | `Media Service`, `Wallet Service`, `Search API`, `Geo/PoI`                   | Các dịch vụ độc lập chuyên biệt: quản lý media, ví điện tử, tìm kiếm (OpenSearch), và xử lý dữ liệu địa lý (PostGIS).   |
| **Lớp AI & Analytics**           | `FastAPI/Python`, `Vision Service`, `NLP Service`, `Report Service`          | Các dịch vụ AI hiệu suất cao: phân tích hình ảnh (YOLOv8), xử lý ngôn ngữ tự nhiên (PhoBERT), và tạo báo cáo tự động.   |
| **Lớp IoT & Data Ingestion**     | `Sensors`, `MQTT Broker` (EMQX/Mosquitto), `IoT Adapter`                     | Thu thập dữ liệu từ cảm biến IoT qua giao thức MQTT, xử lý và chuẩn hóa dữ liệu trước khi đưa vào Event Bus.            |
| **Lớp Event-Driven (Event Bus)** | `RabbitMQ`                                                                   | Hệ thống message queue xử lý luồng sự kiện bất đồng bộ: IoT data stream, vision alerts, report events, alert triggers.  |           |
| **Lớp Quản lý Sự cố**            | `Incident Service`, `DB Incident` (PostgreSQL)                               | Quản lý vòng đời sự cố từ khi phát hiện đến khi giải quyết, lưu trữ lịch sử và trạng thái xử lý.                        |
| **Lớp Thông báo Realtime**       | `Notifier Service`, `Redis Queue`, `Reverb` (WebSocket), `Laravel Webhook`   | Hệ thống thông báo đẩy tức thì qua WebSocket, webhook và các kênh khác khi có cảnh báo hoặc sự kiện quan trọng.         |
| **Lớp Lưu trữ Dữ liệu**          | `PostgreSQL + PostGIS`, `MinIO/S3`, `OpenSearch`, `DB Report`, `DB Incident` | Lưu trữ đa dạng: dữ liệu quan hệ & không gian (PostGIS), file media (MinIO/S3), full-text search (OpenSearch), báo cáo. |

---

## 🛠️ Các Dịch Vụ và Chức Năng Chính (Microservices)

Hệ thống được tổ chức thành các dịch vụ độc lập (Microservices), giao tiếp chủ yếu qua HTTP (REST) và Kafka/MQTT.

### 1. Dịch vụ Cốt lõi

- **RFI/Public API:** Điểm truy cập chính cho các giao diện người dùng. Xử lý logic tổng hợp dữ liệu (Aggregation) và caching (Vũ Cache).
- **Media Service:** Quản lý và lưu trữ tệp tin đa phương tiện vào **MinIO / S3**.
- **Wallet Service:** Xử lý các chức năng liên quan đến ví điện tử/thanh toán.
- **Search API:** Cung cấp giao diện tìm kiếm dữ liệu thông qua **OpenSearch**.

### 2. Dịch vụ IoT và Phân tích Dữ liệu

- **IoT Adapter:** Nhận tin nhắn từ **MQTT Broker** (Sensors), xử lý và đưa vào luồng sự kiện **Kafka**.
- **NLP (Natural Language Processing):** Phân tích và xử lý ngôn ngữ tự nhiên.
- **Vision (Vision Python/FastAPI):** Xử lý thị giác máy tính, tạo ra các sự kiện **`vision_alert`**.
- **Geo/PoI:** Xử lý dữ liệu vị trí và điểm quan tâm (Point of Interest) sử dụng **PostGIS**.

### 3. Dịch vụ Quản lý và Thông báo

- **Report Service:** Tạo báo cáo, lưu trữ vào **DB Report** và **`Produce report observed`** event.
- **Rule Engine (NDx/Drools):** Tiêu thụ các sự kiện cảnh báo từ Vision và Report, áp dụng luật nghiệp vụ để **`Produce alert triggered`**.
- **Incident Service:** Xử lý và quản lý vòng đời của các sự cố, lưu trữ vào **DB Incident**.
- **Notifier Service:** Nhận sự kiện **`alert triggered`** và phân phối thông báo (sử dụng **Redis Queue/Cache**) tới ứng dụng (React Native App) và các nền tảng khác (Laravel Webhook).

---

## ➡️ Luồng Dữ liệu Chính

1.  **Truy cập Ứng dụng:** **React Native App** gửi yêu cầu qua **HTTPS + JWT** đến **API Gateway**.
2.  **Dữ liệu Cảm biến:** **Sensors** -> **MQTT Broker** -> **IoT Adapter** -> **Kafka**.
3.  **Luồng Cảnh báo/Sự cố:**
    - **Vision Service** (hoặc **Report Service**) tạo **`vision/report alert`**.
    - **Kafka** truyền tải các sự kiện này.
    - **Rule Engine** tiêu thụ, áp dụng luật, và tạo **`alert triggered`**.
    - **Notifier Service** nhận **`alert triggered`** để **broadcast data** tới **React Native App** (qua HTTP/Websocket) và **Laravel Webhook**.
4.  **Dữ liệu Báo cáo:** **Report Service** lưu dữ liệu vào **DB Report** và tạo sự kiện cho **Rule Engine**.
5.  **Quản lý Sự cố:** **Incident Service** nhận thông tin liên quan và lưu vào **DB Incident**.

---

## 🔬 AI & dữ liệu

- Vision: YOLOv8 / Detectron2 cho phát hiện đối tượng/sự cố từ ảnh.
- NLP: PhoBERT / XLM-R cho phân loại mô tả tiếng Việt và trích xuất thực thể.
- Fusion Layer: hợp nhất kết quả ảnh, văn bản và metadata để đưa ra nhãn cuối cùng và mức ưu tiên.
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
