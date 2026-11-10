# Nemo Locations

Công cụ vị trí độc lập với 47 địa điểm. Trang chủ `/` và đường dẫn `/locations/` cùng mở công cụ.

## Chạy local

Dùng Node.js 24:

```sh
npm ci
npm run dev
```

Mở http://localhost:3000. Tìm theo tên/mã, chọn điểm, tạo và sao chép tọa độ. Tọa độ được tạo trên trình duyệt trong phạm vi dưới 150 m. Công cụ không thay GPS trên điện thoại.

## Kiểm tra

```sh
npm test
npm run lint
npm run build
```

Build xuất website tĩnh vào `out/`, không cần máy chủ nghiệp vụ, database hoặc biến môi trường.

## Deploy Vercel

Push repo lên GitHub, vào Vercel → Add New Project → Import repo này.
Chọn Framework Preset **Next.js**, Root Directory **.**, Node.js **24.x**.
Build command: `npm run build`; giữ Output Directory mặc định của preset Next.js. Không cần Environment Variables.
Bấm Deploy. Các lần push tiếp theo sẽ tự deploy khi Git integration đã bật.

## Cập nhật địa điểm

Sửa `data/nemo-locations-web.json`, giữ `code` duy nhất và cập nhật `location_count`.
`lat` là vĩ độ, `long` là kinh độ; `source_codes` hỗ trợ tìm kiếm mã gốc.
Hai mã 752004472 và ACC1106 được gộp theo yêu cầu; các mã khác giữ riêng.
Cập nhật số lượng kỳ vọng trong `tests/locations.test.ts` khi thay danh sách.
Dữ liệu công khai chỉ gồm tên, mã và tọa độ; không có dữ liệu tài khoản hay bộ ký.
Danh sách nguồn là cache đồng bộ, không chứng minh quyền chấm công của mọi tài khoản.
