docker run -v $(pwd):/zap/wrk/:rw -t ghcr.io/zaproxy/zaproxy:stable zap-baseline.py -t https://www.example.com -x report.xml

docker run --rm -v $(pwd)/reports:/reports aquasec/trivy:latest image --format json --output /reports/report.json hello-world

docker run --rm -v $(pwd)/PFE:/PFE -v $(pwd):/output zricethezav/gitleaks detect --source /PFE --report-path /output/gitleaks_report.json

docker build -t bandit -f Dockerfile.bandit .
docker run --name bandit-ct bandit
docker cp bandit-ct:/PFE/bandit_results.json ./
docker stop bandit-ct
docker rm bandit-ct