'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useAnimationStore } from '../../_lib/useAnimationStore';
import { getCookie } from '@/lib/utils';
import {
  companyQualifications,
  type CompanyQualifications,
} from '@/lib/data/companyQualifications';
import Badge from '@/components/ui/badge';

const getCategoryVariant = (
  category: string
): 'secondary' | 'success' | 'info' | 'default' => {
  switch (category) {
    case 'experience':
      return 'secondary';
    case 'skills':
      return 'success';
    case 'achievements':
      return 'info';
    default:
      return 'default';
  }
};

const getCategoryText = (category: string) => {
  switch (category) {
    case 'experience':
      return '경험';
    case 'skills':
      return '기술';
    case 'achievements':
      return '성과';
    default:
      return '기타';
  }
};

export default function Qualifications() {
  const [selectedCompany, setSelectedCompany] =
    useState<CompanyQualifications | null>(null);
  const introCompleted = useAnimationStore((state) => state.introCompleted);

  useEffect(() => {
    const companyCookie = getCookie('company');
    if (companyCookie) {
      const company = companyQualifications.find((c) => c.id === companyCookie);
      if (company) {
        setSelectedCompany(company);
      }
    } else {
      setSelectedCompany(null);
    }
  }, []);

  if (selectedCompany && introCompleted) {
    return (
      <section className="animate-fade-in relative flex flex-col space-y-6">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image
                src={selectedCompany.logo.src}
                alt={selectedCompany.logo.alt}
                width={selectedCompany.logo.width}
                height={selectedCompany.logo.height}
                className="rounded-lg border border-gray-300 dark:border-gray-600"
              />
              <h2 className="text-md font-bold text-gray-900 dark:text-white">
                {selectedCompany.name} 자격 요건
              </h2>
            </div>
          </div>

          <div className="space-y-8">
            {selectedCompany.qualifications.filter(
              (item) => item.level === '자격'
            ).length > 0 && (
              <div className="space-y-4">
                <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-white">
                  <Badge variant="destructive" size="sm" className="mr-2">
                    필수
                  </Badge>
                  자격요건
                </h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {selectedCompany.qualifications
                    .filter((item) => item.level === '자격')
                    .map((item, index) => (
                      <div
                        key={`required-${index}`}
                        className="group relative flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-600"
                      >
                        <div className="mb-4 flex items-start justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="rounded-lg bg-gray-50 p-2 transition-transform duration-300 group-hover:scale-110 dark:bg-gray-700">
                              {item.icon}
                            </div>
                          </div>
                          <Badge variant="destructive" size="sm">
                            자격
                          </Badge>
                        </div>

                        <h3 className="mb-2 text-lg font-semibold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                          {item.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                          {item.description}
                        </p>

                        {item.experience && (
                          <div className="mt-4 border-t border-gray-100 py-4 dark:border-gray-700">
                            <h4 className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                              {item.experience.title}
                            </h4>
                            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                              {item.experience.details}
                            </p>
                          </div>
                        )}

                        <div className="mt-auto border-t border-gray-100 pt-4 dark:border-gray-700">
                          <Badge
                            variant={getCategoryVariant(item.category)}
                            size="md"
                          >
                            {getCategoryText(item.category)}
                          </Badge>
                        </div>

                        <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-r from-red-50/50 to-pink-50/50 opacity-0 transition-opacity duration-300 dark:from-red-900/20 dark:to-pink-900/20" />
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* 구분선 */}
            {selectedCompany.qualifications.filter(
              (item) => item.level === '자격'
            ).length > 0 &&
              selectedCompany.qualifications.filter(
                (item) => item.level === '우대'
              ).length > 0 && (
                <div className="relative">
                  <div className="flex items-center">
                    <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                  </div>
                </div>
              )}

            {selectedCompany.qualifications.filter(
              (item) => item.level === '우대'
            ).length > 0 && (
              <div className="space-y-4">
                <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-white">
                  <Badge variant="success" size="sm" className="mr-2">
                    우대
                  </Badge>
                  우대사항
                </h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {selectedCompany.qualifications
                    .filter((item) => item.level === '우대')
                    .map((item, index) => (
                      <div
                        key={`preferred-${index}`}
                        className="group relative flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-600"
                      >
                        <div className="mb-4 flex items-start justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="rounded-lg bg-gray-50 p-2 transition-transform duration-300 group-hover:scale-110 dark:bg-gray-700">
                              {item.icon}
                            </div>
                          </div>
                          <Badge variant="success" size="sm">
                            우대
                          </Badge>
                        </div>

                        <h3 className="mb-2 text-lg font-semibold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                          {item.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                          {item.description}
                        </p>

                        {item.experience && (
                          <div className="mt-4 border-t border-gray-100 py-4 dark:border-gray-700">
                            <h4 className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                              {item.experience.title}
                            </h4>
                            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                              {item.experience.details}
                            </p>
                          </div>
                        )}

                        <div className="mt-auto border-t border-gray-100 pt-4 dark:border-gray-700">
                          <Badge
                            variant={getCategoryVariant(item.category)}
                            size="md"
                          >
                            {getCategoryText(item.category)}
                          </Badge>
                        </div>

                        <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-r from-green-50/50 to-emerald-50/50 opacity-0 transition-opacity duration-300 dark:from-green-900/20 dark:to-emerald-900/20" />
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative flex flex-col space-y-8">
      <div className="space-y-6"></div>
    </section>
  );
}
