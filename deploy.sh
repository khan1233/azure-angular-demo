#!/bin/bash
 
# Exit on error

set -e
 
echo "Starting Angular build process..."
 
# Install dependencies

echo "Installing dependencies..."

npm ci
 
# Build Angular app

echo "Building Angular application..."

npm run build -- --configuration=production
 
echo "Build completed successfully!"
 
# Create web.config for Azure (only for Windows deployment)

if [ "$AZURE_WEBSITE_SKU" != "Linux" ]; then

    echo "Creating web.config for IIS..."

    cat > dist/web.config << EOF
<?xml version="1.0" encoding="utf-8"?>
<configuration>
<system.webServer>
<rewrite>
<rules>
<rule name="Angular Routes" stopProcessing="true">
<match url=".*" />
<conditions logicalGrouping="MatchAll">
<add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
<add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
</conditions>
<action type="Rewrite" url="/index.html" />
</rule>
</rules>
</rewrite>
<staticContent>
<mimeMap fileExtension=".json" mimeType="application/json" />
</staticContent>
</system.webServer>
</configuration>

EOF

fi
 
echo "Deployment package ready!"
 