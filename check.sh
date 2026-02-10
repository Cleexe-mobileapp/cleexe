#!/bin/bash
# Cleexe Project - Pre-Extraction Checklist

echo "🔍 Cleexe Pre-Extraction Verification"
echo "========================================"
echo ""

# Check if all required files exist
echo "✓ Checking project files..."
files=(
  "package.json"
  "tsconfig.json"
  "vite.config.ts"
  "index.html"
  "Dockerfile"
  "docker-compose.yml"
  ".env.example"
  ".gitignore"
  ".prettierrc"
  ".eslintrc.cjs"
)

missing=0
for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "  ✅ $file"
  else
    echo "  ❌ $file (MISSING)"
    missing=$((missing + 1))
  fi
done

echo ""
echo "✓ Checking src/ structure..."
src_dirs=(
  "src/components"
  "src/pages"
  "src/services"
  "src/hooks"
  "src/context"
  "src/utils"
  "src/types"
  "src/styles"
  "src/config"
)

for dir in "${src_dirs[@]}"; do
  if [ -d "$dir" ]; then
    echo "  ✅ $dir"
  else
    echo "  ❌ $dir (MISSING)"
    missing=$((missing + 1))
  fi
done

echo ""
echo "✓ Checking documentation..."
docs=(
  "README.md"
  "EXTRACTION-DEPLOYMENT.md"
  "PLATFORMS.md"
  "SETUP.md"
  "DOCUMENTATION.md"
  "INDEX.md"
)

for doc in "${docs[@]}"; do
  if [ -f "$doc" ]; then
    echo "  ✅ $doc"
  else
    echo "  ❌ $doc (MISSING)"
    missing=$((missing + 1))
  fi
done

echo ""
if [ $missing -eq 0 ]; then
  echo "🎉 All files present! Ready for extraction."
  echo ""
  echo "Next steps:"
  echo "1. npm install"
  echo "2. npm run dev"
  echo "3. For deployment: Read EXTRACTION-DEPLOYMENT.md"
  exit 0
else
  echo "⚠️  $missing file(s) missing!"
  exit 1
fi
