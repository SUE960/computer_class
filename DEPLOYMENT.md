# 배포 가이드

## GitHub 푸시 완료 ✅

프로젝트가 성공적으로 GitHub에 푸시되었습니다:
- 저장소: https://github.com/SUE960/computer_class
- 브랜치: main

## Vercel 배포 방법

### 방법 1: Vercel 웹 인터페이스를 통한 배포 (권장)

1. **Vercel 웹사이트 접속**
   - https://vercel.com 접속
   - GitHub 계정으로 로그인

2. **새 프로젝트 추가**
   - "Add New..." → "Project" 클릭
   - GitHub 저장소 목록에서 `SUE960/computer_class` 선택
   - 또는 "Import Git Repository"에서 직접 URL 입력:
     ```
     https://github.com/SUE960/computer_class
     ```

3. **프로젝트 설정**
   - Framework Preset: **Vite** 선택 (자동 감지됨)
   - Root Directory: `./` (기본값)
   - Build Command: `npm run build` (자동 설정됨)
   - Output Directory: `dist` (자동 설정됨)
   - Install Command: `npm install` (자동 설정됨)

4. **환경 변수** (필요한 경우)
   - 현재는 환경 변수가 필요하지 않습니다

5. **배포 시작**
   - "Deploy" 버튼 클릭
   - 배포가 완료되면 자동으로 URL이 생성됩니다

### 방법 2: Vercel CLI를 통한 배포

터미널에서 다음 명령어를 실행하세요:

```bash
cd /Volumes/T7/project/classroom
npx vercel
```

배포 과정에서:
1. Vercel 계정 로그인 (브라우저가 열림)
2. 프로젝트 설정 확인
3. 배포 완료 후 URL 제공

프로덕션 배포:
```bash
npx vercel --prod
```

## 배포 후 확인사항

배포가 완료되면:
- ✅ 자동으로 HTTPS URL 생성
- ✅ GitHub 푸시 시 자동 재배포 (연동 설정 시)
- ✅ 프리뷰 배포 URL 제공

## 문제 해결

### 빌드 오류가 발생하는 경우
- Vercel 대시보드의 "Deployments" 탭에서 로그 확인
- 로컬에서 `npm run build` 명령어로 빌드 테스트

### 환경 변수가 필요한 경우
- Vercel 프로젝트 설정 → Environment Variables에서 추가

