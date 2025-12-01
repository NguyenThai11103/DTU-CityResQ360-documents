# Search Service - Tổng quan

## Giới thiệu

Search Service cung cấp chức năng tìm kiếm nhanh và chính xác trong toàn bộ hệ thống CityResQ360.

## Chức năng chính

### 1. Full-text Search

- Tìm kiếm toàn văn
- Tìm kiếm mờ (fuzzy search)
- Autocomplete

### 2. Filtering & Faceting

- Lọc theo nhiều tiêu chí
- Faceted search
- Range queries

### 3. Indexing

- Auto-indexing
- Real-time indexing
- Bulk indexing

### 4. Ranking

- Relevance scoring
- Custom ranking
- Boosting

## Tìm kiếm

### Sự cố

```typescript
GET /api/search/incidents?q=cháy&location=Đà Nẵng&status=open
```

### Người dùng

```typescript
GET /api/search/users?q=Nguyễn&role=admin
```

### Địa điểm

```typescript
GET /api/search/locations?q=Trần Phú&type=street
```

## Công nghệ

- **Elasticsearch**: Search engine chính
- **Redis**: Cache kết quả tìm kiếm
- **PostgreSQL**: Full-text search backup

## Tích hợp

Service này tích hợp với:

- **IncidentService**: Tìm kiếm sự cố
- **CoreAPI**: API tìm kiếm
- **AnalyticsService**: Phân tích search queries

## License

Dự án này được phân phối dưới [GNU General Public License v3.0](https://github.com/MNM-DTU-DZ/CityResQ360-DTUDZ/blob/master/LICENSE).
